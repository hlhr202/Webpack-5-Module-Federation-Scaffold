module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                useBuiltIns: "entry",
                corejs: {
                    version: 3,
                    proposals: true,
                },
            },
        ],
        "@babel/preset-react",
        [
            "@babel/preset-typescript",
            {
                onlyRemoveTypeImports: true, // this is important for proper files watching
            },
        ],
    ],
};
