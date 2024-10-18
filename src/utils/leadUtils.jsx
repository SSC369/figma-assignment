const getLogo = (name) => {
  let logo = "";
  const splitName = name.split(" ");
  splitName.forEach((word) => {
    logo += word[0];
  });

  return logo;
};

const getTab = (data) => {
  const splitTab = data.split("-");
  const tabArray = splitTab.map((tab) => {
    return tab[0].toUpperCase() + tab.slice(1);
  });
  const tab = tabArray.join(" ");
  return tab;
};

export { getLogo, getTab };
