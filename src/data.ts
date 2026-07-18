import { Github, Youtube, Instagram, MessageCircle, Gamepad2, FileCode2, Music, Terminal, Code2 } from 'lucide-react';

export const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/djnightmare9909', icon: Github },
  { name: 'YouTube', url: 'https://youtube.com/@djnightmare1005', icon: Youtube },
  { name: 'Instagram', url: 'https://www.instagram.com/justinbrisson686?igsh=cTFlNGYza3czY3o0', icon: Instagram },
  { name: 'Reddit', url: 'https://www.reddit.com/u/autisticDeush/s/vkZLI6CNaL', icon: MessageCircle },
];

export const projects = [
  {
    title: 'Repo Extractor',
    url: 'https://djnightmare9909.github.io/Github-repo-extractor-/',
    description: 'A tool to easily extract and download GitHub repositories.',
    icon: FileCode2
  },
  {
    title: 'Milk Drop Visualizer',
    url: 'https://djnightmare9909.github.io/Free-open-source-butter-churn-audio-visualizer-and-recorder/',
    description: 'Free open source butter churn audio visualizer and recorder.',
    icon: Music
  },
  {
    title: 'Dungeon Master OS',
    url: 'https://dungeonmasteros.com/',
    description: 'A comprehensive operating system and toolkit for Dungeon Masters.',
    icon: Terminal
  },
  {
    title: 'Racing Bricks',
    url: 'https://github.com/djnightmare9909/Racing-bricks/releases/download/V1/Racing-bricks-updated.html',
    description: 'A fun and interactive racing bricks mini game.',
    icon: Gamepad2
  },
  {
    title: 'Grammar Bot',
    url: 'https://github.com/djnightmare9909/Free-open-source-Grammar-bot',
    description: 'A free open source grammar bot (setup required).',
    icon: Code2
  }
];
