/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { socialLinks, projects } from './data';
import { ArrowUpRight } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 px-6 py-12 md:py-24 font-sans text-slate-300">
      <div className="mx-auto max-w-3xl">
        <header className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
              Justin Brisson
            </h1>
            <p className="text-lg text-slate-400 max-w-xl">
              Developer, creator, and enthusiast. Check out my latest projects and find me across the web.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800 hover:text-white border border-slate-800 hover:border-slate-700"
                >
                  <Icon className="h-4 w-4" />
                  {social.name}
                </a>
              );
            })}
          </motion.div>
        </header>

        <main>
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-display text-2xl font-semibold text-white mb-6"
          >
            Projects & Links
          </motion.h2>
          
          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  key={project.title}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-slate-900 p-6 transition-all hover:-translate-y-1 hover:bg-slate-800 hover:shadow-xl hover:shadow-cyan-900/10 border border-slate-800 hover:border-cyan-800/50"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 border border-slate-800 group-hover:border-cyan-900/50 group-hover:text-cyan-400 transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-slate-600 transition-colors group-hover:text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-slate-100 mb-2 group-hover:text-white">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-400">
                      {project.description}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </main>
        
        <footer className="mt-24 border-t border-slate-800/50 pt-8 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Justin Brisson. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
