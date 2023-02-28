/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	webpack: (config) => {
		config.module.rules.push({
			test: /node_modules\/@spectral-finance/,
			resolve: {
				alias: {
					"../../styles/Icon.css": false,
          "../styles/variables.css": false,
          "../../styles/variables.css": false,
          "../../../../styles/variables.css": false,
          "react-circular-progressbar/dist/styles.css": false,
          
				},
			},
		});

		return config;
	},
};
export default nextConfig