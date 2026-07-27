/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { socialLinks, projects } from './data';
import { ArrowUpRight, Github } from 'lucide-react';

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
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  key={project.title}
                  onClick={() => window.open(project.url, '_blank', 'noopener,noreferrer')}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-slate-900 p-6 transition-all hover:-translate-y-1 hover:bg-slate-800 hover:shadow-xl hover:shadow-cyan-900/10 border border-slate-800 hover:border-cyan-800/50 cursor-pointer"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 border border-slate-800 group-hover:border-cyan-900/50 group-hover:text-cyan-400 transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-slate-600 transition-colors group-hover:text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-slate-100 mb-2 group-hover:text-white">
                      <a 
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="hover:underline"
                      >
                        {project.title}
                      </a>
                    </h3>
                    <p className="text-sm text-slate-400">
                      {project.description}
                    </p>
                    {project.disclaimer && (
                      <div 
                        className="mt-4 rounded-lg bg-slate-950/50 p-3 text-xs text-slate-400 border border-slate-800/50 flex flex-col gap-3"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div>
                          <p className="mb-1 text-slate-300 font-medium">Important Note:</p>
                          <p className="leading-relaxed break-words">
                            {project.disclaimer}
                          </p>
                        </div>
                        {project.readmeLink && (
                          <a 
                            href={project.readmeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-between rounded bg-slate-900 border border-slate-700 px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-800 hover:border-slate-600 transition-colors w-full cursor-pointer"
                          >
                            <span className="flex items-center gap-2">
                              <Github className="h-4 w-4" />
                              <span className="font-medium">Read more on GitHub</span>
                            </span>
                            <ArrowUpRight className="h-4 w-4 text-slate-500" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
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
