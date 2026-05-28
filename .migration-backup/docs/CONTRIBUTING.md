# Contributing to Bunzo

Thank you for your interest in contributing! This document provides guidelines for contributing to the project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)

## Code of Conduct

This project adheres to a [Code of Conduct](./CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git
- Code editor (VS Code recommended)

### Setup Development Environment

```bash
# Fork and clone the repository
git clone https://github.com/yourusername/Bunzo.git
cd Bunzo

# Install dependencies
npm install

# Start development server
npm run dev
```

## Development Workflow

### 1. Create a Branch

```bash
# Create a feature branch
git checkout -b feature/your-feature-name

# Or a bugfix branch
git checkout -b fix/bug-description
```

### Branch Naming Convention

- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation changes
- `style/` - Code style changes
- `refactor/` - Code refactoring
- `test/` - Test additions or changes
- `chore/` - Maintenance tasks

### 2. Make Changes

- Write clean, readable code
- Follow the coding standards
- Add comments for complex logic
- Update documentation as needed

### 3. Test Your Changes

```bash
# Run linting
npm run lint

# Build for production
npm run build
```

### 4. Commit Your Changes

Follow the commit message guidelines below.

### 5. Push and Create Pull Request

```bash
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub.

## Coding Standards

### TypeScript

- Use TypeScript strict mode
- Define types for all variables and functions
- Avoid `any` type unless absolutely necessary
- Use interfaces for object shapes

```typescript
// Good
interface Recipe {
  id: string;
  title: string;
  ingredients: string[];
}

// Bad
const recipe: any = { title: 'Food' };
```

### React Components

- Use functional components with hooks
- Keep components focused and single-purpose
- Use proper prop types
- Implement proper cleanup in useEffect

```typescript
// Good
interface Props {
  title: string;
  onClose: () => void;
}

export const Modal: React.FC<Props> = ({ title, onClose }) => {
  // Component logic
};
```

### CSS/Tailwind

- Use Tailwind utility classes
- Follow mobile-first approach
- Use custom CSS only when necessary
- Maintain consistent spacing

```html
<!-- Good -->
<div class="flex flex-col md:flex-row gap-4">
  <!-- Content -->
</div>
```

### File Naming

- Use kebab-case for files: `recipe-card.tsx`
- Use PascalCase for components: `RecipeCard`
- Use camelCase for variables: `recipeList`
- Use UPPER_CASE for constants: `MAX_RECIPES`

## Commit Guidelines

### Commit Message Format

```
<type>(<scope>): <subject>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Test additions
- `chore`: Maintenance tasks

### Examples

```
feat(recipes): add recipe filtering by category

fix(search): resolve search bar not clearing issue
```

## Pull Request Process

### Before Submitting

1. ✅ Update documentation
2. ✅ Run linting
3. ✅ Build successfully
4. ✅ Test manually

### PR Description Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update

## Testing
- [ ] Manual testing completed
- [ ] No console errors

## Screenshots
(if applicable)
```

### Review Process

1. At least one approval required
2. All CI checks must pass
3. No merge conflicts
4. Documentation updated

## Questions?

- Open an issue for bugs
- Start a discussion for questions

Thank you for contributing! 🎉
