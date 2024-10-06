const quizData = {
    planets: {
      easy: [
        { question: "What is the largest planet?", options: ["Earth", "Mars", "Jupiter", "Saturn"], correctAnswer: 2 },
        { question: "What is the closest planet to the Sun?", options: ["Mercury", "Venus", "Earth", "Mars"], correctAnswer: 0 },
        { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Saturn"], correctAnswer: 1 },
        { question: "Which planet is known for its rings?", options: ["Earth", "Mars", "Jupiter", "Saturn"], correctAnswer: 3 },
        { question: "What planet is often called Earth's twin?", options: ["Venus", "Mars", "Mercury", "Saturn"], correctAnswer: 0 },
        { question: "What planet is known as the Blue Planet?", options: ["Earth", "Neptune", "Uranus", "Mars"], correctAnswer: 0 },
        { question: "Which planet is farthest from the Sun?", options: ["Uranus", "Neptune", "Pluto", "Saturn"], correctAnswer: 1 },
        { question: "Which planet is famous for its Great Red Spot?", options: ["Mars", "Jupiter", "Saturn", "Neptune"], correctAnswer: 1 },
        { question: "Which planet is the smallest in the solar system?", options: ["Mercury", "Mars", "Venus", "Pluto"], correctAnswer: 0 },
        { question: "Which planet has the shortest day?", options: ["Earth", "Saturn", "Jupiter", "Neptune"], correctAnswer: 2 },
      ],
      medium: [
        { question: "Which planet has the longest day?", options: ["Venus", "Jupiter", "Mercury", "Earth"], correctAnswer: 0 },
        { question: "Which planet has the strongest winds?", options: ["Jupiter", "Saturn", "Neptune", "Mars"], correctAnswer: 2 },
        { question: "Which planet has the most volcanoes?", options: ["Mars", "Venus", "Mercury", "Earth"], correctAnswer: 1 },
        { question: "Which planet is the coldest?", options: ["Uranus", "Pluto", "Neptune", "Saturn"], correctAnswer: 0 },
        { question: "Which planet has a tilted axis of 98 degrees?", options: ["Venus", "Uranus", "Earth", "Mars"], correctAnswer: 1 },
        { question: "Which planet was demoted to dwarf planet status?", options: ["Neptune", "Pluto", "Eris", "Makemake"], correctAnswer: 1 },
        { question: "Which planet has the shortest year?", options: ["Venus", "Mercury", "Mars", "Jupiter"], correctAnswer: 1 },
        { question: "Which planet has the largest canyon system?", options: ["Earth", "Venus", "Mars", "Saturn"], correctAnswer: 2 },
        { question: "Which planet has the largest number of moons?", options: ["Mars", "Jupiter", "Saturn", "Neptune"], correctAnswer: 2 },
        { question: "Which planet has a solid surface?", options: ["Venus", "Jupiter", "Neptune", "Uranus"], correctAnswer: 0 },
      ],
      hard: [
        { question: "Which planet has seasons similar to Earth?", options: ["Venus", "Mars", "Saturn", "Jupiter"], correctAnswer: 1 },
        { question: "Which planet has a day longer than its year?", options: ["Venus", "Mercury", "Mars", "Pluto"], correctAnswer: 0 },
        { question: "Which planet's orbit is the most eccentric?", options: ["Mars", "Venus", "Mercury", "Pluto"], correctAnswer: 2 },
        { question: "Which planet's surface is covered with sulfuric acid clouds?", options: ["Earth", "Mars", "Venus", "Saturn"], correctAnswer: 2 },
        { question: "Which planet has a magnetic field 20,000 times stronger than Earth's?", options: ["Mars", "Saturn", "Jupiter", "Uranus"], correctAnswer: 2 },
        { question: "Which planet has geysers that shoot water into space?", options: ["Mars", "Neptune", "Saturn", "Jupiter"], correctAnswer: 1 },
        { question: "Which planet has a Great Dark Spot?", options: ["Neptune", "Jupiter", "Saturn", "Uranus"], correctAnswer: 0 },
        { question: "Which planet was visited by Voyager 2 in 1986?", options: ["Jupiter", "Saturn", "Uranus", "Neptune"], correctAnswer: 2 },
        { question: "Which planet has more mass than all the other planets combined?", options: ["Earth", "Jupiter", "Saturn", "Neptune"], correctAnswer: 1 },
        { question: "Which planet's gravity is only 38% of Earth's?", options: ["Mars", "Mercury", "Venus", "Uranus"], correctAnswer: 0 },
      ]
    },
    moons: {
      easy: [
        { question: "What is Earth's moon called?", options: ["Luna", "Phobos", "Deimos", "Europa"], correctAnswer: 0 },
        { question: "Which planet has moons named Phobos and Deimos?", options: ["Jupiter", "Mars", "Saturn", "Neptune"], correctAnswer: 1 },
        { question: "Which moon is the largest in the solar system?", options: ["Europa", "Titan", "Ganymede", "Callisto"], correctAnswer: 2 },
        { question: "Which planet has the most moons?", options: ["Earth", "Jupiter", "Saturn", "Mars"], correctAnswer: 1 },
        { question: "Which moon is known for its ice-covered surface?", options: ["Io", "Europa", "Ganymede", "Titan"], correctAnswer: 1 },
        { question: "Which planet's largest moon is Titan?", options: ["Jupiter", "Saturn", "Uranus", "Neptune"], correctAnswer: 1 },
        { question: "Which moon has volcanic activity?", options: ["Phobos", "Deimos", "Io", "Titan"], correctAnswer: 2 },
        { question: "Which moon is known to have an ocean under its icy crust?", options: ["Europa", "Io", "Phobos", "Callisto"], correctAnswer: 0 },
        { question: "Which planet has a moon named Triton?", options: ["Jupiter", "Saturn", "Neptune", "Uranus"], correctAnswer: 2 },
        { question: "What is the name of Pluto's largest moon?", options: ["Nix", "Hydra", "Styx", "Charon"], correctAnswer: 3 },
      ],
      medium: [
        { question: "Which moon has a thick atmosphere?", options: ["Europa", "Ganymede", "Callisto", "Titan"], correctAnswer: 3 },
        { question: "Which moon is the most volcanically active?", options: ["Io", "Europa", "Ganymede", "Titan"], correctAnswer: 0 },
        { question: "Which moon of Saturn has lakes of methane?", options: ["Titan", "Enceladus", "Tethys", "Mimas"], correctAnswer: 0 },
        { question: "Which moon is thought to have a subsurface ocean?", options: ["Europa", "Ganymede", "Callisto", "Titan"], correctAnswer: 0 },
        { question: "Which moon has retrograde orbit around its planet?", options: ["Triton", "Titan", "Io", "Callisto"], correctAnswer: 0 },
        { question: "Which moon of Jupiter is larger than the planet Mercury?", options: ["Io", "Europa", "Ganymede", "Callisto"], correctAnswer: 2 },
        { question: "Which moon orbits backwards relative to its planet's rotation?", options: ["Triton", "Io", "Phobos", "Callisto"], correctAnswer: 0 },
        { question: "Which moon has been shown to have geysers of water?", options: ["Europa", "Enceladus", "Titan", "Triton"], correctAnswer: 1 },
        { question: "Which moon has an extremely thin atmosphere?", options: ["Io", "Europa", "Triton", "Callisto"], correctAnswer: 2 },
        { question: "Which moon has polar ice caps?", options: ["Phobos", "Titan", "Europa", "Mars"], correctAnswer: 2 },
      ],
      hard: [
        { question: "Which moon has a surface temperature of around -180°C?", options: ["Titan", "Enceladus", "Europa", "Callisto"], correctAnswer: 0 },
        { question: "Which moon has a high albedo, reflecting most sunlight?", options: ["Io", "Europa", "Ganymede", "Triton"], correctAnswer: 1 },
        { question: "Which moon was discovered by Galileo in 1610?", options: ["Io", "Europa", "Ganymede", "Callisto"], correctAnswer: 0 },
        { question: "Which moon has cryovolcanoes that spew water?", options: ["Enceladus", "Io", "Triton", "Europa"], correctAnswer: 0 },
        { question: "Which moon orbits Neptune?", options: ["Triton", "Europa", "Titan", "Ganymede"], correctAnswer: 0 },
        { question: "Which moon's surface is mostly nitrogen ice?", options: ["Europa", "Titan", "Triton", "Ganymede"], correctAnswer: 2 },
        { question: "Which moon orbits the planet closest to the Sun?", options: ["Deimos", "Phobos", "Triton", "Callisto"], correctAnswer: 1 },
        { question: "Which moon has a magnetic field?", options: ["Europa", "Ganymede", "Triton", "Callisto"], correctAnswer: 1 },
        { question: "Which moon is the most distant from the Sun?", options: ["Triton", "Titan", "Io", "Phobos"], correctAnswer: 0 },
        { question: "Which moon has cracks that are hundreds of kilometers long?", options: ["Enceladus", "Europa", "Titan", "Ganymede"], correctAnswer: 1 },
      ]
    },
    suns: {
        easy: [
          { question: "What is the name of our Sun?", options: ["Sol", "Sirius", "Alpha Centauri", "Betelgeuse"], correctAnswer: 0 },
          { question: "What type of star is our Sun?", options: ["Red Dwarf", "White Dwarf", "Yellow Dwarf", "Neutron Star"], correctAnswer: 2 },
          { question: "How old is the Sun?", options: ["4.6 billion years", "2 billion years", "1 billion years", "6 billion years"], correctAnswer: 0 },
          { question: "What element makes up most of the Sun?", options: ["Hydrogen", "Oxygen", "Helium", "Carbon"], correctAnswer: 0 },
          { question: "What is the surface temperature of the Sun?", options: ["5,500°C", "10,000°C", "15,000°C", "20,000°C"], correctAnswer: 0 },
          { question: "How many planets orbit the Sun?", options: ["6", "7", "8", "9"], correctAnswer: 2 },
          { question: "What color does the Sun appear in the sky?", options: ["White", "Yellow", "Red", "Blue"], correctAnswer: 1 },
          { question: "What phase of its life cycle is the Sun currently in?", options: ["Main Sequence", "Red Giant", "White Dwarf", "Black Hole"], correctAnswer: 0 },
          { question: "What is the Sun mainly composed of?", options: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon"], correctAnswer: 1 },
          { question: "What process powers the Sun?", options: ["Nuclear Fusion", "Combustion", "Solar Wind", "Magnetic Fields"], correctAnswer: 0 }
        ],
        medium: [
          { question: "How long does light take to travel from the Sun to Earth?", options: ["8 minutes", "15 minutes", "1 minute", "30 minutes"], correctAnswer: 0 },
          { question: "What is the core temperature of the Sun?", options: ["15 million°C", "1 million°C", "100,000°C", "10,000°C"], correctAnswer: 0 },
          { question: "What is the Sun's energy output called?", options: ["Solar Wind", "Solar Luminosity", "Solar Flare", "Coronal Mass Ejection"], correctAnswer: 1 },
          { question: "How far is the Sun from Earth?", options: ["93 million miles", "50 million miles", "120 million miles", "150 million miles"], correctAnswer: 0 },
          { question: "What part of the Sun is visible during a solar eclipse?", options: ["Corona", "Photosphere", "Core", "Chromosphere"], correctAnswer: 0 },
          { question: "What is the outermost layer of the Sun?", options: ["Chromosphere", "Corona", "Core", "Radiative Zone"], correctAnswer: 1 },
          { question: "What is a solar flare?", options: ["An explosion on the Sun's surface", "A burst of solar wind", "A magnetic storm", "An increase in solar luminosity"], correctAnswer: 0 },
          { question: "What type of star will the Sun eventually become?", options: ["Red Giant", "White Dwarf", "Neutron Star", "Black Hole"], correctAnswer: 1 },
          { question: "Which is not a layer of the Sun?", options: ["Core", "Mantle", "Chromosphere", "Photosphere"], correctAnswer: 1 },
          { question: "How much mass does the Sun lose every second?", options: ["4 million tons", "500 tons", "1 billion tons", "100 tons"], correctAnswer: 0 }
        ],
        hard: [
          { question: "How much longer will the Sun live before it becomes a red giant?", options: ["5 billion years", "2 billion years", "1 billion years", "10 billion years"], correctAnswer: 0 },
          { question: "What is the Sun's spectral classification?", options: ["G2V", "F5IV", "K1III", "A2V"], correctAnswer: 0 },
          { question: "What is the Sun's rotation period at its equator?", options: ["25 days", "30 days", "40 days", "50 days"], correctAnswer: 0 },
          { question: "What causes sunspots?", options: ["Magnetic field fluctuations", "Solar wind", "Coronal mass ejections", "Nuclear fusion"], correctAnswer: 0 },
          { question: "What is the approximate density of the Sun?", options: ["1.41 g/cm³", "5.5 g/cm³", "2.1 g/cm³", "0.97 g/cm³"], correctAnswer: 0 },
          { question: "In what form is most of the Sun's energy released?", options: ["Visible light", "Infrared radiation", "Ultraviolet light", "X-rays"], correctAnswer: 0 },
          { question: "How does the Sun's magnetic field affect the Earth?", options: ["Auroras", "Earthquakes", "Tsunamis", "Volcanoes"], correctAnswer: 0 },
          { question: "How many Earths can fit inside the Sun?", options: ["1.3 million", "10,000", "100,000", "500,000"], correctAnswer: 0 },
          { question: "What is a solar prominence?", options: ["A large, bright feature extending from the Sun", "A type of sunspot", "A solar flare", "A part of the core"], correctAnswer: 0 },
          { question: "What type of solar phenomenon can disrupt satellite communications?", options: ["Solar flare", "Aurora", "Solar wind", "Coronal mass ejection"], correctAnswer: 3 }
        ]
      },
      satellites: {
        easy: [
          { question: "Which was the first artificial satellite launched into space?", options: ["Sputnik 1", "Explorer 1", "Apollo 11", "Vostok 1"], correctAnswer: 0 },
          { question: "What does a satellite orbit?", options: ["A planet", "A star", "A galaxy", "An asteroid"], correctAnswer: 0 },
          { question: "Which country launched the first artificial satellite?", options: ["USA", "USSR", "China", "India"], correctAnswer: 1 },
          { question: "Which satellite helps with weather forecasting?", options: ["Hubble", "Landsat", "GOES", "Kepler"], correctAnswer: 2 },
          { question: "What is the International Space Station?", options: ["A manned satellite", "A natural satellite", "A space shuttle", "A space probe"], correctAnswer: 0 },
          { question: "Which satellite was launched by the United States in 1958?", options: ["Sputnik 1", "Explorer 1", "Landsat", "Hubble"], correctAnswer: 1 },
          { question: "What is the primary purpose of GPS satellites?", options: ["Weather tracking", "Communication", "Navigation", "Astronomy"], correctAnswer: 2 },
          { question: "Which satellite provides high-resolution images of Earth's surface?", options: ["Landsat", "Hubble", "Voyager", "Cassini"], correctAnswer: 0 },
          { question: "Which satellite orbits the Moon?", options: ["LRO", "Hubble", "Voyager", "Kepler"], correctAnswer: 0 },
          { question: "What is a geostationary satellite?", options: ["A satellite that stays over one point on Earth", "A satellite that orbits the Moon", "A satellite that orbits the Sun", "A satellite that moves randomly"], correctAnswer: 0 }
        ],
        medium: [
          { question: "Which satellite provided the first direct measurements of the solar wind?", options: ["Voyager 1", "Parker Solar Probe", "SOHO", "Explorer 1"], correctAnswer: 3 },
          { question: "Which satellite was used for the first live broadcast of an event worldwide?", options: ["Telstar 1", "Sputnik 1", "Apollo 11", "Kepler"], correctAnswer: 0 },
          { question: "What does 'GPS' stand for?", options: ["Global Positioning System", "Galactic Positioning System", "Geocentric Prediction System", "General Purpose Satellite"], correctAnswer: 0 },
          { question: "What is the orbit of a satellite called that moves in sync with Earth's rotation?", options: ["Polar orbit", "Low Earth orbit", "Geostationary orbit", "Sun-synchronous orbit"], correctAnswer: 2 },
          { question: "Which satellite was the first to orbit another planet?", options: ["Mariner 9", "Voyager 1", "Galileo", "Cassini"], correctAnswer: 0 },
          { question: "Which satellite mission studied Saturn and its moons?", options: ["Cassini", "Voyager 1", "Galileo", "Pioneer"], correctAnswer: 0 },
          { question: "Which satellite captured the first images of Jupiter's Great Red Spot?", options: ["Voyager 1", "Pioneer 10", "Galileo", "New Horizons"], correctAnswer: 0 },
          { question: "What kind of orbit does a weather satellite typically use?", options: ["Polar orbit", "Geostationary orbit", "Low Earth orbit", "Molniya orbit"], correctAnswer: 1 },
          { question: "Which satellite was launched to study Venus?", options: ["Magellan", "Mariner 10", "Cassini", "Pioneer"], correctAnswer: 0 },
          { question: "Which satellite provided the first detailed maps of Mars?", options: ["Viking Orbiter", "Voyager 1", "Cassini", "Pioneer 10"], correctAnswer: 0 }
        ],
        hard: [
          { question: "Which satellite discovered the Van Allen radiation belts?", options: ["Explorer 1", "Pioneer 10", "Voyager 1", "Cassini"], correctAnswer: 0 },
          { question: "What type of orbit does a Molniya satellite follow?", options: ["Highly elliptical orbit", "Polar orbit", "Low Earth orbit", "Geostationary orbit"], correctAnswer: 0 },
          { question: "Which satellite was the first to detect gamma-ray bursts?", options: ["Vela", "Pioneer 10", "SOHO", "Cassini"], correctAnswer: 0 },
          { question: "Which satellite mission discovered geysers on Saturn's moon Enceladus?", options: ["Cassini", "Voyager 2", "Galileo", "Pioneer"], correctAnswer: 0 },
          { question: "Which satellite was launched to map the cosmic microwave background?", options: ["WMAP", "Voyager 1", "Kepler", "Hubble"], correctAnswer: 0 },
          { question: "Which satellite explored Jupiter's moon Europa?", options: ["Galileo", "Voyager 1", "Cassini", "New Horizons"], correctAnswer: 0 },
          { question: "Which satellite discovered thousands of exoplanets?", options: ["Kepler", "Voyager 1", "Hubble", "Cassini"], correctAnswer: 0 },
          { question: "Which satellite was the first to visit Pluto?", options: ["New Horizons", "Voyager 1", "Cassini", "Galileo"], correctAnswer: 0 },
          { question: "Which satellite mission studied the Sun's outer atmosphere?", options: ["SOHO", "Parker Solar Probe", "Voyager 1", "Cassini"], correctAnswer: 0 },
          { question: "What is the purpose of CubeSats?", options: ["Educational and research purposes", "Weather tracking", "Military use", "GPS navigation"], correctAnswer: 0 }
        ]
      },
      asteroids: {
        easy: [
          { question: "What is the largest asteroid in the asteroid belt?", options: ["Ceres", "Vesta", "Pallas", "Eros"], correctAnswer: 0 },
          { question: "What is an asteroid?", options: ["A small rocky body orbiting the Sun", "A comet without a tail", "A type of moon", "A small planet"], correctAnswer: 0 },
          { question: "What asteroid is known as a dwarf planet?", options: ["Ceres", "Vesta", "Eros", "Pallas"], correctAnswer: 0 },
          { question: "Which asteroid did NASA's OSIRIS-REx visit?", options: ["Bennu", "Ceres", "Vesta", "Eros"], correctAnswer: 0 },
          { question: "What is the region called where most asteroids are found?", options: ["Asteroid Belt", "Kuiper Belt", "Oort Cloud", "Solar System"], correctAnswer: 0 },
          { question: "Which asteroid was the first to be discovered?", options: ["Ceres", "Eros", "Vesta", "Pallas"], correctAnswer: 0 },
          { question: "Which asteroid has the shortest orbital period around the Sun?", options: ["Eros", "Vesta", "Pallas", "Ceres"], correctAnswer: 1 },
          { question: "What is the smallest type of asteroid?", options: ["Carbonaceous asteroids", "Silicaceous asteroids", "Metallic asteroids", "Rubblestone asteroids"], correctAnswer: 3 },
          { question: "Which planet's gravity influences the asteroid belt the most?", options: ["Jupiter", "Mars", "Earth", "Venus"], correctAnswer: 0 },
          { question: "Which asteroid has its own moon?", options: ["Ida", "Ceres", "Vesta", "Eros"], correctAnswer: 0 }
        ],
        medium: [
          { question: "What is the approximate distance of the asteroid belt from the Sun?", options: ["2-3 AU", "1-2 AU", "3-4 AU", "4-5 AU"], correctAnswer: 0 },
          { question: "Which spacecraft studied the asteroid Vesta?", options: ["Dawn", "Rosetta", "New Horizons", "Cassini"], correctAnswer: 0 },
          { question: "What is the difference between an asteroid and a meteoroid?", options: ["Size", "Composition", "Location", "None"], correctAnswer: 0 },
          { question: "Which asteroid did NASA's NEAR Shoemaker mission land on?", options: ["Eros", "Vesta", "Pallas", "Ceres"], correctAnswer: 0 },
          { question: "Which type of asteroid is rich in carbon?", options: ["C-type", "S-type", "M-type", "V-type"], correctAnswer: 0 },
          { question: "What is the second-largest asteroid in the asteroid belt?", options: ["Vesta", "Ceres", "Pallas", "Eros"], correctAnswer: 0 },
          { question: "Which planet is closest to the asteroid belt?", options: ["Mars", "Earth", "Venus", "Mercury"], correctAnswer: 0 },
          { question: "What is the approximate diameter of the largest asteroid, Ceres?", options: ["940 km", "500 km", "1,000 km", "1,500 km"], correctAnswer: 0 },
          { question: "Which asteroid is named after the Greek goddess of wisdom?", options: ["Pallas", "Vesta", "Ceres", "Eros"], correctAnswer: 0 },
          { question: "Which asteroid collided with Earth and caused the extinction of the dinosaurs?", options: ["Chicxulub", "Vesta", "Eros", "Ida"], correctAnswer: 0 }
        ],
        hard: [
          { question: "Which asteroid was the first to be orbited by a spacecraft?", options: ["Vesta", "Ceres", "Eros", "Pallas"], correctAnswer: 0 },
          { question: "What is the orbital period of asteroid 243 Ida?", options: ["4.84 years", "3.5 years", "6.1 years", "5.5 years"], correctAnswer: 0 },
          { question: "Which asteroid is a binary system?", options: ["Antiope", "Eros", "Vesta", "Ceres"], correctAnswer: 0 },
          { question: "Which type of asteroid is metallic?", options: ["M-type", "C-type", "S-type", "K-type"], correctAnswer: 0 },
          { question: "Which asteroid is thought to be the remnant of a protoplanet?", options: ["Vesta", "Ceres", "Eros", "Pallas"], correctAnswer: 0 },
          { question: "What is the rotational period of asteroid Eros?", options: ["5.27 hours", "7.4 hours", "10.5 hours", "3.5 hours"], correctAnswer: 0 },
          { question: "What percentage of asteroids are C-type?", options: ["75%", "10%", "50%", "90%"], correctAnswer: 0 },
          { question: "What is the main composition of S-type asteroids?", options: ["Silicates", "Carbon", "Ice", "Metals"], correctAnswer: 0 },
          { question: "Which asteroid is the closest to the Sun?", options: ["Aten", "Apollo", "Amor", "Icarus"], correctAnswer: 0 },
          { question: "Which spacecraft is the first to return samples from an asteroid?", options: ["OSIRIS-REx", "Hayabusa", "Rosetta", "Dawn"], correctAnswer: 0 }
        ]
      },
      comets: {
        easy: [
          { question: "Which comet is famous for its predictable appearance?", options: ["Halley's Comet", "Hale-Bopp", "Shoemaker-Levy 9", "Swift-Tuttle"], correctAnswer: 0 },
          { question: "What is a comet?", options: ["A ball of ice and dust orbiting the Sun", "A type of asteroid", "A distant planet", "A small moon"], correctAnswer: 0 },
          { question: "What part of a comet glows when it approaches the Sun?", options: ["Coma", "Tail", "Nucleus", "Core"], correctAnswer: 1 },
          { question: "Which comet collided with Jupiter in 1994?", options: ["Shoemaker-Levy 9", "Halley's Comet", "Hale-Bopp", "Swift-Tuttle"], correctAnswer: 0 },
          { question: "What is the bright halo around the nucleus of a comet called?", options: ["Coma", "Tail", "Corona", "Core"], correctAnswer: 0 },
          { question: "Which comet was visible to the naked eye in 1997?", options: ["Hale-Bopp", "Halley's Comet", "Shoemaker-Levy 9", "Swift-Tuttle"], correctAnswer: 0 },
          { question: "Which part of a comet always points away from the Sun?", options: ["Tail", "Nucleus", "Core", "Coma"], correctAnswer: 0 },
          { question: "What is the frozen center of a comet called?", options: ["Nucleus", "Tail", "Coma", "Core"], correctAnswer: 0 },
          { question: "Which comet is believed to be the source of the Perseid meteor shower?", options: ["Swift-Tuttle", "Halley's Comet", "Hale-Bopp", "Shoemaker-Levy 9"], correctAnswer: 0 },
          { question: "Which comet orbits the Sun every 76 years?", options: ["Halley's Comet", "Swift-Tuttle", "Hale-Bopp", "Shoemaker-Levy 9"], correctAnswer: 0 }
        ],
        medium: [
          { question: "Which spacecraft was the first to land on a comet?", options: ["Rosetta", "Hayabusa", "Voyager 1", "Cassini"], correctAnswer: 0 },
          { question: "What is the approximate orbital period of Halley's Comet?", options: ["76 years", "54 years", "100 years", "200 years"], correctAnswer: 0 },
          { question: "Which comet was visible to the naked eye in 2020?", options: ["NEOWISE", "Halley's Comet", "Hale-Bopp", "Swift-Tuttle"], correctAnswer: 0 },
          { question: "Which comet is responsible for the Leonid meteor shower?", options: ["Tempel-Tuttle", "Swift-Tuttle", "Shoemaker-Levy 9", "Halley's Comet"], correctAnswer: 0 },
          { question: "Which part of a comet contains most of its mass?", options: ["Nucleus", "Tail", "Coma", "Core"], correctAnswer: 0 },
          { question: "Which comet was named after the astronomers who discovered it in 1995?", options: ["Hale-Bopp", "Halley's Comet", "Shoemaker-Levy 9", "Swift-Tuttle"], correctAnswer: 0 },
          { question: "Which comet's return is associated with the October Draconid meteor shower?", options: ["Giacobini-Zinner", "Swift-Tuttle", "Shoemaker-Levy 9", "Hale-Bopp"], correctAnswer: 0 },
          { question: "What is the name of the spacecraft that studied comet Tempel 1?", options: ["Deep Impact", "Hayabusa", "Rosetta", "Voyager 1"], correctAnswer: 0 },
          { question: "Which comet broke apart and collided with Jupiter?", options: ["Shoemaker-Levy 9", "Hale-Bopp", "Halley's Comet", "Swift-Tuttle"], correctAnswer: 0 },
          { question: "What causes a comet's tail to form?", options: ["Solar radiation", "Gravitational pull", "Magnetic fields", "Planetary orbits"], correctAnswer: 0 }
        ],
        hard: [
          { question: "What is the composition of a comet's nucleus?", options: ["Ice, dust, and rocky material", "Hydrogen and helium", "Iron and nickel", "Silicate minerals"], correctAnswer: 0 },
          { question: "Which comet orbits the Sun once every 133 years?", options: ["Swift-Tuttle", "Halley's Comet", "Hale-Bopp", "Shoemaker-Levy 9"], correctAnswer: 0 },
          { question: "Which spacecraft flew by comet Halley in 1986?", options: ["Giotto", "Rosetta", "Voyager 2", "New Horizons"], correctAnswer: 0 },
          { question: "Which comet's close approach is responsible for the Quadrantid meteor shower?", options: ["2003 EH1", "Swift-Tuttle", "Tempel-Tuttle", "Shoemaker-Levy 9"], correctAnswer: 0 },
          { question: "Which comet was discovered by amateur astronomers?", options: ["Shoemaker-Levy 9", "Hale-Bopp", "Halley's Comet", "Swift-Tuttle"], correctAnswer: 0 },
          { question: "Which spacecraft was designed to collect samples from a comet's tail?", options: ["Stardust", "Rosetta", "Hayabusa", "Deep Impact"], correctAnswer: 0 },
          { question: "Which comet had the closest known approach to Earth?", options: ["Lexell's Comet", "Swift-Tuttle", "Shoemaker-Levy 9", "Halley's Comet"], correctAnswer: 0 },
          { question: "Which comet's discovery was announced in 2021?", options: ["Bernardinelli-Bernstein", "Swift-Tuttle", "Shoemaker-Levy 9", "Hale-Bopp"], correctAnswer: 0 },
          { question: "Which comet was visible in daylight during its 1910 approach?", options: ["Halley's Comet", "Hale-Bopp", "Swift-Tuttle", "Shoemaker-Levy 9"], correctAnswer: 0 },
          { question: "Which comet is considered a long-period comet?", options: ["Hale-Bopp", "Swift-Tuttle", "Halley's Comet", "Shoemaker-Levy 9"], correctAnswer: 0 }
        ]
      }
  };

  export default quizData;
