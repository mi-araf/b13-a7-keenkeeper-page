'use client';

import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

const TimelineContext = createContext(null);

export function TimelineProvider({ children }) {
    const [entries, setEntries] = useState([]);

    const addTimelineEntry = useCallback((entry) => {
        setEntries((current) => [entry, ...current]);
    }, []);

    const value = useMemo(() => ({ entries, addTimelineEntry }), [entries, addTimelineEntry]);

    return <TimelineContext.Provider value={value}>{children}</TimelineContext.Provider>;
}

export function useTimeline() {
    const context = useContext(TimelineContext);
    if (!context) {
        throw new Error('useTimeline must be used within a TimelineProvider');
    }
    return context;
}
