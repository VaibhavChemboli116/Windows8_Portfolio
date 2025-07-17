declare module './Desktop' {
  const Desktop: React.FC;
  export default Desktop;
}

declare module './StartScreen' {
  const StartScreen: React.FC<{ onClose: () => void }>;
  export default StartScreen;
}

declare module './Taskbar' {
  const Taskbar: React.FC<{ onStartClick: () => void }>;
  export default Taskbar;
} 