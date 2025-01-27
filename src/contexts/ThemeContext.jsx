import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const themes = {
    default: {
        primaryBg: '#2c3e50',
        secondaryBg: '#2c3e50',
        accentColor: '#e74c3e',
        highlightColor: '#f39c12',
        contentBg: '#2ecc71',
        playlistBg: '#1abc9c',
        color: 'white',
        secondaryColor: 'white',
        borderBottom: '#e74c3e'
    },
    dark: {
        primaryBg: '#1a1a1a',
        secondaryBg: '#231d1d',
        accentColor: '#e74c3c',
        highlightColor: '#f39c12',
        contentBg: '#444',
        color: 'rgb(255, 255, 255)',
        secondaryColor: 'rgb(0, 0, 0)',
        borderBottom: '#f39c12'
    },
    light: {
        primaryBg: '#ffb458',
        secondaryBg: '#ffae4a',
        accentColor: '#ff4d4d',
        highlightColor: '#ff8c00',
        contentBg: '#ff8c00',
        color: 'black',
        secondaryColor: 'black',
        borderBottom: '#ff4d4d'
    },
    'mint-green': {
        primaryBg: '#98ff98',
        secondaryBg: '#e0ffe0',
        accentColor: '#00cc99',
        highlightColor: '#b3ffb3',
        contentBg: '#ccffcc',
        color: '#004d33',
        secondaryColor: '#006666',
        borderBottom: '#00cc99'
    },
    'icy': {
        primaryBg: '#e0f7fa',
        secondaryBg: '#b2ebf2',
        accentColor: '#00bcd4',
        highlightColor: '#00acc1',
        contentBg: '#ffffff',
        color: '#000080',
        secondaryColor: '#add8e6',
        borderBottom: '#00bcd4'
    },
    'fire': {
        primaryBg: '#ff4500',
        secondaryBg: '#b22222',
        accentColor: '#ffa500',
        highlightColor: '#ff4500',
        contentBg: '#ff6347',
        color: '#000000',
        secondaryColor: '#2c2c2c',
        borderBottom: '#ffa500'
    },
    'halloween': {
        primaryBg: '#1c1c1c',
        secondaryBg: '#ff7518',
        accentColor: '#8a2be2',
        highlightColor: '#ffcc00',
        contentBg: '#2e2b5f',
        color: '#f8f8ff',
        secondaryColor: '#ff7518',
        borderBottom: '#ffcc00'
    },
    'purple': {
        primaryBg: '#800080',
        secondaryBg: '#9370db',
        accentColor: '#4b0082',
        highlightColor: '#ee82ee',
        contentBg: '#dda0dd',
        color: '#ffffff',
        secondaryColor: '#e6e6fa',
        borderBottom: '#4b0082'
    },
    'pink': {
        primaryBg: '#ffb3d9',
        secondaryBg: '#ffe6f2',
        accentColor: '#ff69b4',
        highlightColor: '#ff99cc',
        contentBg: '#ffccf2',
        color: '#330033',
        secondaryColor: '#660066',
        borderBottom: '#ff69b4'
    },
    'gray': {
        primaryBg: '#7f8c8d',
        secondaryBg: '#bdc3c7',
        accentColor: '#34495e',
        highlightColor: '#95a5a6',
        contentBg: '#ecf0f1',
        color: '#2c3e50',
        secondaryColor: '#7f8c8d',
        borderBottom: '#34495e'
    },
    'propeller-orange': {
        primaryBg: '#ff9800',
        secondaryBg: '#ffb74d',
        accentColor: '#ff5722',
        highlightColor: '#ffc107',
        contentBg: '#ffcc80',
        color: '#ffffff',
        secondaryColor: '#3e2723',
        borderBottom: '#ff5722'
    },
    'bee': {
        primaryBg: '#f9e79f',
        secondaryBg: '#f1c40f',
        accentColor: '#e67e22',
        highlightColor: '#f39c12',
        contentBg: '#fff9c4',
        color: '#000000',
        secondaryColor: '#7f8c8d',
        borderBottom: '#e67e22'
    },
    'sunset': {
        primaryBg: '#ff5733',
        secondaryBg: '#ffc300',
        accentColor: '#c70039',
        highlightColor: '#900c3f',
        contentBg: '#ffccbc',
        color: '#ffffff',
        secondaryColor: '#212121',
        borderBottom: '#ff5733'
    }
};

export function ThemeProvider({ children }) {
    const [currentTheme, setCurrentTheme] = useState(() => {
        return localStorage.getItem('theme') || 'default';
    });

    useEffect(() => {
        const theme = themes[currentTheme];
        document.documentElement.style.setProperty('--primary-bg', theme.primaryBg);
        document.documentElement.style.setProperty('--secondary-bg', theme.secondaryBg);
        document.documentElement.style.setProperty('--accent-color', theme.accentColor);
        document.documentElement.style.setProperty('--highlight-color', theme.highlightColor);
        document.documentElement.style.setProperty('--content-bg', theme.contentBg);
        document.documentElement.style.setProperty('--color', theme.color);
        document.documentElement.style.setProperty('--secondary-color', theme.secondaryColor);
        document.documentElement.style.setProperty('--border-bottom', theme.borderBottom);
        
        // Add theme class to body
        document.body.className = currentTheme === 'default' ? '' : `${currentTheme}-theme`;
        localStorage.setItem('theme', currentTheme);
    }, [currentTheme]);

    return (
        <ThemeContext.Provider value={{ currentTheme, setCurrentTheme, themes }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}; 