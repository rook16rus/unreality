const srcPath = 'src';
const destPath = 'build';

const config = {
  src: {
    root: srcPath,
    sass: `${srcPath}/scss`,
    js: `${srcPath}/js`,
    fonts: `${srcPath}/assets/fonts`,
    favicon: `${srcPath}/assets/favicon`,
    icons: `${srcPath}/assets/icons`,
    images: `${srcPath}/assets/img`,
    video: `${srcPath}/assets/videos`,
    iconsMono: `${srcPath}/assets/icons/mono`,
    iconsMulti: `${srcPath}/assets/icons/multi`,
    backendJs: `${srcPath}/assets/js`,
    pug: `${srcPath}/pug`,
    include: `${srcPath}/assets/include`,
  },

  dest: {
    root: destPath,
    html: destPath,
    css: `${destPath}/assets/css`,
    js: `${destPath}/assets/js`,
    fonts: `${destPath}/assets/fonts`,
    images: `${destPath}/assets/images`,
    icons: `${destPath}/assets/images/icons`,
    backendJs: `${destPath}/assets/js`,
    favicon: `${destPath}/assets/favicon`,
    video: `${destPath}/assets/videos`,
    include: `${destPath}/assets/include`,
  },

  setEnv() {
    this.isProd = process.argv.includes('--prod');
    this.isDev = !this.isProd;
  },
};

export default config;
