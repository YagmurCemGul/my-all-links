export const defaultData = {
  n: "Yağmur Cem Gül",
  d: "Project Manager | Digital Marketing Strategist | Digital Product Developer / Game Developer",
  i: "/profil-foto.png",
  f: "https://www.facebook.com/yagmurcemgul",
  t: "https://twitter.com/yagmurcemgul",
  ig: "https://www.instagram.com/yagmurcemgul",
  gh: "https://github.com/yagmurcemgul",
  tg: "https://t.me/yagmurcemgul",
  l: "https://linkedin.com/in/yagmurcemgul",
  e: "yagmurcemgul@gmail.com",
  w: "+905386520339",
  y: "https://youtube.com/@rispeacebell",
  ls: [
    {
      l: "Portfolio",
      i: "zondicons:portfolio",
      u: "https://yagmurcemgul.vercel.app/",
    },
    {
      l: "Buy Me a Coffee",
      i: "simple-icons:buymeacoffee",
      u: "https://buymeacoffee.com/yagmurcemgul",
    },
    {
      l: "Kaggle",
      i: "pixel:kaggle",
      u: "https://www.kaggle.com/yagmurcemgul",
    },
    {
      l: "Download CV",
      i: "tabler:file-cv-filled",
      u: "https://drive.google.com/uc?export=view&id=16HI4vT8U0-l-5LKM3Pe7gYHmgSPVyCmN",
    },
  ],
};

export const cloneDefaultData = () => JSON.parse(JSON.stringify(defaultData));
