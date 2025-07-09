import { User } from '../models/user.model.js';

export const authCallback = async (req, res, next) => {
    try {
        const { id, firstName, lastName, imageUrl } = req.body;

        let user = await User.findOne({ clerkId: id });
        if (!user) {
            user = new User({
                clerkId: id,
                fullName: `${firstName || ""} ${lastName || ""}`.trim(),
                imageUrl: imageUrl
            });
            await user.save();
        }
        res.status(200).json({ message: "User authenticated successfully", success: true });
    } catch (error) {
        console.error("Error in authCallback:", error);
        next(error);
    }
}