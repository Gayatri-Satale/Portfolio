import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import Timeline from './journey/Timeline';
import SectionHeader from './ui/SectionHeader';
import Loader from './ui/Loader';
import { getEducationHistory } from '../services/educationService';

export default function JourneySection() {
  const [inView, setInView] = useState(false);

  const educationQuery = useQuery({ queryKey: ['education'], queryFn: getEducationHistory, enabled: inView });

  const educationItems: any[] = Array.isArray(educationQuery.data) ? educationQuery.data : [];

  const isLoading = educationQuery.isLoading;
  const isError = educationQuery.isError;

  return (
    <motion.section
      id="journey"
      className="py-20 md:py-28 bg-slate-50 dark:bg-black border-y border-slate-200 dark:border-neutral-800 transition-colors duration-300"
      onViewportEnter={() => setInView(true)}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-6">
        <SectionHeader title="My Journey" description="Taught by books, trained by bugs, Here is how I learned." />

        <div className="mt-12 relative max-w-3xl mx-auto min-h-[30rem]">
          {inView && isLoading && <div className="absolute inset-0 flex justify-center pt-8"><Loader /></div>}
          {inView && isError && <div className="text-center pt-8 text-red-500"><p>Could not load journey data.</p></div>}

          {inView && !isLoading && !isError && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: "easeOut" }}>
              <Timeline items={educationItems} />
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
}
