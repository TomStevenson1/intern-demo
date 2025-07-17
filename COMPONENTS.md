# Component Documentation

## 🧩 Component Architecture

### UI Components (`/src/components/ui/`)

#### Button Component
- **Location**: `src/components/ui/button.tsx`
- **Purpose**: Reusable button component with Philips branding
- **Variants**: 
  - `default` - Standard Philips blue button
  - `philips` - Gradient Philips brand button
  - `outline` - Outlined button
  - `ghost` - Transparent background
  - `link` - Link-style button

**Usage:**
```tsx
<Button variant="philips" size="lg">
  Call to Action
</Button>
```

#### Card Component
- **Location**: `src/components/ui/card.tsx`
- **Purpose**: Content container with consistent styling
- **Sub-components**: `CardHeader`, `CardTitle`, `CardContent`, `CardFooter`

**Usage:**
```tsx
<Card>
  <CardHeader>
    <CardTitle>Section Title</CardTitle>
  </CardHeader>
  <CardContent>
    Content goes here
  </CardContent>
</Card>
```

#### Tabs Component
- **Location**: `src/components/ui/tabs.tsx`
- **Purpose**: Tabbed interface for DevOps sections
- **Sub-components**: `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent`

### Section Components (`/src/components/sections/`)

#### Header Component
- **Location**: `src/components/sections/Header.tsx`
- **Purpose**: Landing page hero section
- **Features**: 
  - Full-screen hero with Philips gradient
  - Navigation dots for smooth scrolling
  - Call-to-action buttons

#### About Component
- **Location**: `src/components/sections/About.tsx`
- **Purpose**: Intern biography section
- **Features**:
  - Split layout for two interns
  - Individual profile cards
  - Contribution highlights

#### Timeline Component
- **Location**: `src/components/sections/Timeline.tsx`
- **Purpose**: Internship journey visualization
- **Features**:
  - 12-week timeline with milestones
  - Alternating card layout
  - Progress indicators

#### DevOpsOverview Component
- **Location**: `src/components/sections/DevOpsOverview.tsx`
- **Purpose**: Technical work showcase
- **Features**:
  - Tabbed interface for four work areas
  - Detailed explanations and metrics
  - Before/after comparisons

#### CICDSection Component
- **Location**: `src/components/sections/CICDSection.tsx`
- **Purpose**: Pipeline and architecture visualization
- **Features**:
  - Miro board embed placeholders
  - Environment flow diagrams
  - Quality gates visualization

#### Contact Component
- **Location**: `src/components/sections/Contact.tsx`
- **Purpose**: Contact information and acknowledgments
- **Features**:
  - Individual contact cards
  - Social media links
  - Philips team acknowledgments

## 🎨 Styling Guidelines

### Tailwind CSS Classes

#### Layout
- `container-desktop`: Max-width container for desktop
- `section-padding`: Consistent section padding (py-16 px-8)

#### Colors
- `philips-gradient`: Philips blue gradient background
- `philips-text-gradient`: Philips blue gradient text
- `text-primary`: Philips blue text color

#### Typography
- `text-4xl font-bold`: Section headings
- `text-2xl font-semibold`: Subsection headings
- `text-xl`: Lead paragraphs
- `text-sm text-gray-600`: Secondary text

### Custom CSS Classes

#### Gradients
```css
.philips-gradient {
  background: linear-gradient(135deg, #0065d3 0%, #004ba0 100%);
}

.philips-text-gradient {
  background: linear-gradient(135deg, #0065d3 0%, #004ba0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

## 📱 Responsive Behavior

**Note**: This project is desktop-first and not optimized for mobile devices.

- Minimum viewport: 1024px width
- Optimal viewing: 1920x1080 desktop monitors
- Grid layouts adapt between 1-2 columns on smaller desktop screens
- Timeline switches to single-column on medium screens

## 🔧 Customization Guide

### Updating Content

#### 1. Intern Information
Edit `src/components/sections/About.tsx`:
- Update names, bios, and contribution lists
- Modify profile initials and descriptions

#### 2. Timeline Milestones
Edit `src/components/sections/Timeline.tsx`:
- Update `timelineData` array with actual project dates
- Modify descriptions and highlights

#### 3. DevOps Sections
Edit `src/components/sections/DevOpsOverview.tsx`:
- Update technical details and metrics
- Modify implementation strategies

#### 4. Contact Links
Edit `src/components/sections/Contact.tsx`:
- Add GitHub and LinkedIn profile URLs
- Update acknowledgment text

### Adding New Sections

1. Create new component in `src/components/sections/`
2. Import and add to `src/App.tsx`
3. Add navigation dot to Header component
4. Update scroll navigation

### Modifying Styling

1. Update Tailwind config in `tailwind.config.js`
2. Modify CSS variables in `src/index.css`
3. Add custom classes as needed

## 🧪 Testing Components

Each component should be tested for:
- Proper rendering with expected props
- Responsive behavior on desktop screens
- Accessibility compliance
- Performance with smooth scrolling

## 🔄 Performance Optimization

- Lazy load images and heavy content
- Optimize bundle size with code splitting
- Use React.memo for expensive components
- Implement smooth scroll with proper debouncing
