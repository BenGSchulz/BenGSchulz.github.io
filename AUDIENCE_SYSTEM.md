# Audience Context System

This system allows you to dynamically swap website content based on your target audience. It's designed for your personal use to customize your presentation for different contexts.

## How it Works

The system uses React Context to provide different configurations based on the selected audience type. The main components are:

### Audience Types

- **General**: Balanced content for general audiences
- **Tech**: Technical details and in-depth technical experience
- **Non-Tech**: Business-focused content with less technical jargon
- **Academia**: Research and education focused content
- **Startup**: Emphasizes rapid development and full-stack capabilities

### What Changes Based on Audience

1. **Header Content**:

   - Title and subtitle can change
   - Some contact links may be hidden for certain audiences

2. **Resume Content**:

   - Summary text tailored to audience
   - Skills section with relevant categories
   - Projects section can be shown/hidden
   - Education section can be expanded with details

3. **Employment History**:
   - Job descriptions and bullet points customized for each audience
   - Technical depth varies based on audience type

## Usage

### For Development/Testing

- Use the `AudienceSelector` component (visible in top-left corner)
- This is only for your use during development - not visible to end users
- Switch between different audience types to see content change

### For Production

- The default audience is "General"
- You can programmatically set the audience in your application logic
- Remove or hide the `AudienceSelector` component for production

## File Structure

```
src/
├── context/
│   ├── AudienceContext.tsx    # Main context definition and provider
│   └── AudienceConfigs.ts     # All audience-specific configurations
├── components/
│   ├── audience-selector.tsx  # Development tool for switching audiences
│   ├── header.tsx            # Now uses audience context
│   └── employment.tsx        # Now uses audience context
└── pages/
    ├── index.tsx             # Includes audience selector
    └── resume.tsx            # Uses audience context for content
```

## Customizing Content

To modify content for different audiences, edit the configurations in `src/context/AudienceConfigs.ts`. Each audience type has its own complete configuration including:

- Header information
- Resume summary and skills
- Project visibility and content
- Education details
- Employment history with customized descriptions

## Integration

The system is integrated at the root level via `gatsby-browser.js` using the `AudienceProvider`, making the context available throughout your entire application.
