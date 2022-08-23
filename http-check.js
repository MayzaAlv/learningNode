const fetch = require("node-fetch");

async function checkStatus(arrayURLs) {
  const arrayStats = await Promise.all(
    arrayURLs.map(async (url) => {
      const res = await fetch(url);
      return res.status;
    })
  );
  return arrayStats;
}

function arrayURLs(arrayLinks) {
  return arrayLinks.map((objectLink) => Object.values(objectLink).join());
}

async function check(arrayLinks) {
  const links = arrayURLs(arrayLinks);
  const statusLinks = await checkStatus(links);

  const results = arrayLinks.map((object, index) => ({
    ...object,
    status: statusLinks[index],
  }));
  return results;
}

module.exports = check;
