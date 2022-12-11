module.exports = ({env}) => ({
    ur: env("RENDER_EXTERNAL_URL"),
    dirs:{
        public: "/data/public",
    },
});