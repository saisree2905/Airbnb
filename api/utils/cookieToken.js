const cookieToken = (user, res) => {
    const token = user.getJwtToken();

    const cookieTime = process.env.COOKIE_TIME || 7; // fallback 7 days

    const options = {
        expires: new Date(Date.now() + cookieTime * 24 * 60 * 60 * 1000),
        httpOnly: true,
        secure: false,    // false for local testing
        sameSite: 'lax'   // works fine for local development
    };

    user.password = undefined;
    res.status(200).cookie("token", token, options).json({
        success: true,
        token,
        user
    });
};

module.exports = cookieToken;
