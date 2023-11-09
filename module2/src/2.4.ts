{
  // Generic with interface

  interface Developer<T, B = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: B;
  }

  type EmilabWatch = {
    brand: string;
    model: string;
    display: string;
  };

  const poordev: Developer<EmilabWatch> = {
    name: "mohiuddin",
    computer: {
      brand: "Gigabyte",
      model: "H16VH",
      releaseYear: 2021,
    },
    smartWatch: {
      brand: "Emilab",
      model: "Kw66",
      display: "OLED",
    },
  };

  interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  interface YamahaBike {
    model: string;
    price: number;
    kilometer: string;
  }

  const richDev: Developer<AppleWatch, YamahaBike> = {
    name: "richMohi",
    computer: {
      brand: "apple",
      model: "a15",
      releaseYear: 2021,
    },
    smartWatch: {
      brand: "Apple",
      model: "Kw66",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: "Yamaha",
      price: 27000,
      kilometer: "1230 kilometer",
    },
  };
}
