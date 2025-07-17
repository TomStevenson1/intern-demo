# Philips DevOps Internship Portfolio

A modern React-based portfolio website showcasing the DevOps contributions of Judson and Tom during their internship at Philips.

## 🏗️ Project Structure

```
philips-intern-portfolio/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── tabs.tsx
│   │   └── sections/
│   │       ├── Header.tsx
│   │       ├── About.tsx
│   │       ├── Timeline.tsx
│   │       ├── DevOpsOverview.tsx
│   │       ├── CICDSection.tsx
│   │       └── Contact.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── tsconfig.json
```

## 🎨 Design System

### Color Palette
- **Philips Blue**: #0065d3 (Primary brand color)
- **Philips White**: #ffffff (Secondary color)
- **Black**: #000000 (Text and accents)

### Typography
- Modern, clean typography using Tailwind CSS defaults
- Hierarchical text sizing for clear information architecture

## 🔧 Technology Stack

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS + Shadcn/ui components
- **Build Tool**: Create React App
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React

## 🚀 Features

### 1. Landing/Header Section
- Hero section with intern names and mission statement
- Smooth scroll navigation
- Fixed navigation dots for section jumping

### 2. About Us Section
- Split layout showcasing both interns
- Individual bio cards with contributions
- Professional profile presentation

### 3. Timeline Section
- 12-week internship journey visualization
- Interactive timeline with key milestones
- Week-by-week breakdown of achievements

### 4. DevOps Overview Section
- Tabbed interface for four main areas:
  - Workbench Setup
  - GitHub Runners Configuration  
  - Test Automation Framework
  - Remote Deployment of Avila Builds

### 5. CI/CD & Diagrams Section
- Pipeline architecture visualization
- Environment flow diagrams
- Miro board embed placeholders
- Quality gates and triggers explanation

### 6. Contact/Footer Section
- Individual contact information
- GitHub and LinkedIn links
- Acknowledgments to Philips team
- Professional footer

## 🎯 Desktop-First Design

This portfolio is specifically optimized for desktop presentation:
- Large viewport layouts (1920x1080+)
- Professional presentation format
- Rich visual elements and detailed content
- Not mobile-responsive (by design)

## 📦 Installation & Setup

1. **Prerequisites**: Node.js 18+ and npm
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start development server**:
   ```bash
   npm start
   ```
4. **Build for production**:
   ```bash
   npm run build
   ```

## 🛠️ Development Guidelines

### Component Architecture
- Modular component structure using functional components
- TypeScript for type safety
- Shadcn UI for consistent design system
- Tailwind CSS for utility-first styling

### Styling Conventions
- Use Tailwind CSS classes for styling
- Custom CSS classes for Philips-specific branding
- Consistent spacing using Tailwind's spacing scale
- Semantic color naming (primary, secondary, etc.)

### Code Organization
- Separate UI components from section components
- Utility functions in `/lib` directory
- Type definitions co-located with components
- Clear import/export patterns

## 📋 Content Guidelines

### Placeholder Content
Some sections include placeholder content that should be replaced:
- Miro board embed URLs
- GitHub profile links
- LinkedIn profile links
- Specific project details

### Customization Points
- Update intern names and bios in About section
- Replace timeline milestones with actual project dates
- Add real project screenshots and diagrams
- Update contact information and social links

## 🔄 Future Enhancements

Potential areas for expansion:
- Interactive project demos
- Video content integration
- Detailed case studies
- Performance metrics dashboard
- Team testimonials section

## 📄 License

This project is created for educational and portfolio purposes as part of a Philips internship program.
