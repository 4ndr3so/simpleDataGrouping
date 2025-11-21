"use client";

import React, { useState, useEffect, use, useMemo } from 'react';
// An array of objects following ProjectInfo interface
import projectData from '../data/data.json';
import { Table } from './Table';
import { ProjectInfo } from '../types/types';
import { groupProjectsByStatus } from '../utils/groupingStatus';


export function App(props: any) {

    const KNOWN_STATUSES: ProjectInfo['status'][] = ['A', 'B', 'C', 'D'];

    const [filter, setFilter] = useState<string>('');

    const filteredProjects = useMemo(() => {
        return (projectData as ProjectInfo[]).filter(project => {
            const lowerCase = filter.toLowerCase();


            return project.name.toLowerCase().includes(lowerCase)
        });
    }, [filter]); // Recalculate only when the filter input changes


    const groupedProjects = useMemo(() => {
        return groupProjectsByStatus(filteredProjects, KNOWN_STATUSES);
    }, [filteredProjects]);


    const handleImputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value);
    }

    return (
        <div className='App'>
            <input
                type="text"
                value={filter}
                onChange={handleImputChange}
                placeholder="Filter projects"
            />
            
            {Object.entries(groupedProjects).map(([status, projects]) => (
                <div key={status}>
                    <br></br>
                    <h3>Projects with status {status}:</h3>
                    <Table filteredProjects={projects} />
                </div>
            ))}
        </div>
    );
}