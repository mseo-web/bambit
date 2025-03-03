import type { Technology } from "../types/technology";

// Импортируйте изображения как модули
import vuejsLogo from '/images/technologies/vuejs1.png';
import laravelLogo from '/images/technologies/laravel1.png';
import djangoLogo from '/images/technologies/django1.png';
import octoberLogo from '/images/technologies/october1.png';
import swiftLogo from '/images/technologies/swift1.png';
import kotlinLogo from '/images/technologies/kotlin1.png';
import flutterLogo from '/images/technologies/flutter1.png';
import reactNativeLogo from '/images/technologies/ReactNative1.png';

const featuresData: Technology[] = [
  {
    id: 1,
    icon: vuejsLogo,
  },
  {
    id: 2,
    icon: laravelLogo,
  },
  {
    id: 3,
    icon: djangoLogo,
  },
  {
    id: 4,
    icon: octoberLogo,
  },
  {
    id: 5,
    icon: swiftLogo,
  },
  {
    id: 6,
    icon: kotlinLogo,
  },
  {
    id: 7,
    icon: flutterLogo,
  },
  {
    id: 8,
    icon: reactNativeLogo,
  },
];
export default featuresData;
