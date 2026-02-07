# 🎨 Cimano Design System

A modern, comprehensive design system built with **Next.js 15**, **React 19**, and **Tailwind CSS**. Features a premium dark interface with carefully crafted components and extensive documentation.

![Design System](https://img.shields.io/badge/Design%20System-v1.0-8B5CF6)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![React](https://img.shields.io/badge/React-19-61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38BDF8)

## ✨ Features

- 🎯 **Comprehensive Component Library** - Atoms, molecules, and organisms following atomic design principles
- 🎨 **Rich Color System** - 7 semantic variants with 11 shades each (primary, secondary, success, info, warning, danger, neutral)
- 📐 **Typography Scale** - Complete typographic system with Onest font family
- 🌙 **Premium Dark Theme** - Sleek, modern dark interface throughout
- 📱 **Fully Responsive** - All components adapt seamlessly to different screen sizes
- ✨ **Smooth Animations** - Delightful micro-interactions and transitions
- 📖 **Extensive Documentation** - Interactive examples and implementation guides
- ♿ **Accessibility First** - WCAG compliant components with proper ARIA labels
- 🎭 **Multiple Variants** - Filled, outlined, and different size options for most components

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/rakhacimano/cimano-design-system.git
cd cimano-design-system
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Components

### Atoms
- **Button** - Multiple variants (primary, secondary, success, etc.) with 3 sizes
- **Icon** - 200+ icons from Iconly library with customizable sets (bold, bulk, linear)
- **Input** - Text input with label, placeholder, and error states
- **Label** - Semantic color labels in filled and outlined variants
- **Message** - Contextual notifications with icons and close button
- **RadioButton** - Circular radio selectors
- **ToggleSwitch** - Sliding toggle switches with smooth animations
- **Card** - Flexible container component

### Molecules
- **DatePicker** - Full-featured calendar with date/month/year views
- **DateInput** - Input field with dropdown date picker

### Organisms
- **Sidebar** - Collapsible navigation with smooth animations
- **Header** - Top navigation bar

### Templates
- **DocLayout** - Documentation page layout with right-side table of contents

## 🎨 Design Foundations

### Colors
7 semantic color variants, each with 11 shades (50-1000):
- **Primary** - Purple tones
- **Secondary** - Blue-purple tones  
- **Success** - Green tones
- **Info** - Blue tones
- **Warning** - Orange/yellow tones
- **Danger** - Red/pink tones
- **Neutral** - Grey/slate tones

### Typography
Built with **Onest** font family featuring:
- 6 heading styles (H1-H6)
- 4 body text sizes
- Caption and overline variants
- Font weights from 300 to 700

### Spacing
Consistent spacing scale from 0.5 (2px) to 96 (384px) using Tailwind's spacing system

## 📚 Documentation

The design system includes comprehensive documentation for:
- **Foundations** - Colors, typography, spacing
- **Components** - Interactive demos, anatomy, properties, implementation
- **Image Upload** - File upload utilities

Visit the documentation at [http://localhost:3000](http://localhost:3000) after running the dev server.

## 🛠️ Technology Stack

- **Framework**: Next.js 15 with App Router
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4.0
- **Language**: TypeScript
- **Icons**: Iconly (react-iconly)
- **Font**: Onest (Google Fonts)

## 📁 Project Structure

```
cimano-design-system/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── components/         # Component documentation pages
│   │   ├── foundations/        # Design foundation pages
│   │   ├── globals.css         # Global styles
│   │   └── layout.tsx          # Root layout
│   ├── components/
│   │   ├── atoms/              # Basic building blocks
│   │   ├── molecules/          # Composite components
│   │   ├── organisms/          # Complex components
│   │   └── templates/          # Page templates
│   └── lib/                    # Utility functions
├── public/                     # Static assets
└── tailwind.config.ts          # Tailwind configuration
```

## 🎯 Usage Example

```tsx
import { Button } from "@/components/atoms/Button";
import { DateInput } from "@/components/molecules/DateInput";
import { Message } from "@/components/atoms/Message";
import { useState } from "react";

export default function MyPage() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="space-y-4">
      <Message variant="info" icon="InfoCircle" type="outlined">
        Welcome to Cimano Design System!
      </Message>

      <DateInput 
        value={date} 
        onChange={setDate}
        placeholder="Select a date"
      />

      <Button variant="primary" size="medium">
        Get Started
      </Button>
    </div>
  );
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Rakha Cimano**
- GitHub: [@rakhacimano](https://github.com/rakhacimano)

## 🙏 Acknowledgments

- Icons by [Iconly](https://www.figma.com/community/file/1166831539721848106)
- Font by [Onest](https://fonts.google.com/specimen/Onest)
- Built with [Next.js](https://nextjs.org/)

---

<p align="center">Made with ❤️ by Rakha Cimano</p>
