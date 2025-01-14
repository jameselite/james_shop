export const AuthStatus = (req, res) => {

    try {
        
        const accessToken = req.cookies.accessToken;
        const refreshToken = req.cookies.refreshToken;

        const authObject = {AccessToken: false, RefreshToken: false };

        if(accessToken) authObject.AccessToken = true;
        if(refreshToken) authObject.RefreshToken = true;

        return res.status(200).json(authObject);

    } catch (err) {

        return res.status(400).json({ error: err.message })
        
    }
}