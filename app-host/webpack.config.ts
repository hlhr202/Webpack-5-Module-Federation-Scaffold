import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

const ModuleFederationPlugin = webpack.container.ModuleFederationPlugin;

type WebpackConfigFunction = (
    env: NodeJS.ProcessEnv,
    arg: any
) => webpack.Configuration;

const config: WebpackConfigFunction = (env, arg) => {
    return {
        mode: "production",
        entry: "./src/index.tsx",
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "static/js/[name].[chunkhash].js",
            publicPath: "/",
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js"],
        },
        devtool: "source-map",
        devServer: {
            port: 3000,
            compress: true,
            hot: true,
            host: "0.0.0.0",
            contentBase: path.resolve(__dirname, "dist"),
            publicPath: "/",
            historyApiFallback: {
                rewrites: [
                    {
                        from: /^\/$/,
                        to: "/index.html",
                    },
                    {
                        from: /./,
                        to: "/index.html",
                    },
                ],
            },
        },
        module: {
            rules: [
                {
                    test: /bootstrap\.tsx$/,
                    loader: "bundle-loader",
                    options: {
                        lazy: true,
                    },
                },
                {
                    test: /\.tsx?$/,
                    use: ["babel-loader"],
                    exclude: /node_modules/,
                },
            ],
        },
        plugins: [
            new ForkTsCheckerWebpackPlugin({
                typescript: {
                    diagnosticOptions: {
                        semantic: true,
                        syntactic: true,
                    },
                },
            }),
            new HtmlWebpackPlugin({
                template: "src/index.ejs",
            }),
            new ModuleFederationPlugin({
                name: "appHost",
                remotes: {
                    appSlave:
                        "appSlave@http://localhost:5000/remoteEntry.js",
                },
                shared: ["react", "react-router-dom"],
            }),
        ],
    };
};

export default config;
