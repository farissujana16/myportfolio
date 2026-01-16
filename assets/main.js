fetch("assets/data_new.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to load JSON");
    }
    return response.json();
  })
  .then((data) => {
    const list = document.getElementById("list_project");

    var str = "";

    const techColorMap = {
      HTML: "warning",
      CSS: "info",
      SCSS: "pink",
      Sass: "pink",
      JavaScript: "warning",
      TypeScript: "primary",
      React: "info",
      Vue: "success",
      Angular: "danger",
      Tailwind: "cyan",
      Bootstrap: "purple",

      // Backend
      Laravel: "danger",
      PHP: "indigo",
      Nodejs: "success",
      Express: "dark",
      Python: "primary",
      Django: "success",
      Flask: "light",

      // Mobile
      Flutter: "blue",
      ReactNative: "info",
      Kotlin: "orange",
      Swift: "danger",
      Java: "warning",

      // Database
      MySQL: "warning",
      PostgreSQL: "info",
      MongoDB: "success",
      Firebase: "warning",
      Redis: "danger",
      SQLite: "secondary",
      Default: "secondary",
    };
    var color = "";

    data.projects.forEach((data, index) => {
      if (data.platform == "web") {
        color = "primary";
      } else {
        color = "success";
      }

      str +=
        '<div onclick="detail(' +
        index +
        ')" class="project-item position-relative" style="cursor: pointer;">\
                      <span class="position-absolute top-0 end-0 badge badge-top bg-' +
        color +
        '" style="font-size:medium">' +
        data.platform +
        '</span>\
                      <div class="row g-3">\
                        <div class="col-12 col-md-4 text-center">\
                          <img class="image-project img-fluid" src="' +
        data.image +
        '" alt="Project Image">\
                        </div>\
                        <div class="col-12 col-md-8">\
                          <div class="d-flex flex-column justify-content-between align-items-start h-100">\
                            <div class="mb-3">\
                              <h5 class="">' +
        data.title +
        '</h5>\
                              <span class="text-muted-dark" style="font-size: small;">\
                                ' +
        data.description +
        '\
                              </span>\
                            </div>\
                            <div class="d-flex flex-wrap gap-2">\
                            ' +
        data.technologies
          .map((tech) => {
            const color = techColorMap[tech] || techColorMap.Default;
            return `<span class="badge bg-label-${color} me-1">${tech}</span>`;
          })
          .join("") +
        "\
                            </div>\
                          </div>\
                        </div>\
                      </div>\
                    </div>";
    });

    const p = document.createElement("div");
    p.innerHTML = str;

    // Tambahkan ke container yang sesuai
    document.getElementById("list_project").appendChild(p);
  })
  .catch((error) => {
    console.error("Error:", error);
    document.getElementById("project-list").innerHTML =
      '<p class="text-danger">Failed to load project data.</p>';
  });

function detail(index) {
  console.log(index);
  window.location.href = "project.html?id=" + index;
}

particlesJS("particles-js", {
  particles: {
    number: { value: 60 },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.5,
      width: 1,
    },
    move: { enable: true, speed: 2 },
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" },
    },
  },
  retina_detect: true,
});
