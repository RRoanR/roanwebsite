## Packages
framer-motion | Page transitions, scroll-triggered animations, and fluid micro-interactions
zustand | Lightweight global state management for the English/Dutch language toggle
react-hook-form | Form state management
@hookform/resolvers | Zod validation integration for the quote form

## Notes
- Using Zustand for a simple i18n implementation to toggle between 'en' and 'nl'.
- The Quote form uses a slider (1-4) to capture relative project size/budget to keep the UI clean and high-conversion.
- The live Quote form currently exposes only `home` and `it` as service choices.
- API expects `sliderValue` as an integer.
