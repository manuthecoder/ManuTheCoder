/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: "/:slug*",
                has: [
                    {
                        type: "host",
                        value: "manu.is-a.dev",
                    },
                ],
                destination: "https://bymanu.me/:slug*",
                permanent: true,
            },
        ];
    },
}

module.exports = nextConfig
