const data = [
  {
    name: "root",
    isFile: false,
    contents: [
      {
        name: "Apps",
        isFile: false,
        contents: [
          {
            name: "toddle.exe",
            isFile: true,
            contents: [],
          },
          {
            name: "chrome.exe",
            isFile: true,
            contents: [],
          },
          {
            name: "screenshots",
            isFile: false,
            contents: [
              {
                name: "05-01-23.jpg",
                isFile: true,
                contents: [],
              },
              {
                name: "25-03-23.jpg",
                isFile: true,
                contents: [],
              },
            ],
          },
        ],
      },
      {
        name: "Pictures",
        isFile: false,
        contents: [
          {
            name: "pic1.jpg",
            isFile: true,
            contents: [],
          },
          {
            name: "pic2.jpg",
            isFile: true,
            contents: [],
          },
        ],
      },
      {
        name: "Videos",
        isFile: false,
        contents: [
          {
            name: "birthday2020.mp4",
            isFile: true,
            contents: [],
          },
          {
            name: "graduationDay.mp4",
            isFile: true,
            contents: [],
          },
          {
            name: "companyawardCeremony.mp4",
            isFile: true,
            contents: [],
          },
        ],
      },
      {
        name: "Docs",
        isFile: false,
        contents: [],
      },
      {
        name: "budget.pdf",
        isFile: true,
        contents: [],
      },
    ],
  },
];

export default data;
