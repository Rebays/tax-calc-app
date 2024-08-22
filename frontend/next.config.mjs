/** @type {import('next').NextConfig} */

const isGitHubPages = process.env.DEPLOY_TARGET === 'gh-pages';
const nextConfig = {
    assetPrefix: isGitHubPages ? 'https://<Account-name>/<Repository-name>' : '',
    output: "export",
    reactStrictMode: true,
};

export default nextConfig;
