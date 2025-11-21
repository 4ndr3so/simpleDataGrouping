"use client";

import React, { useState, useEffect } from 'react';
import { ProjectInfo } from '../types/types';

// An array of objects following ProjectInfo interface
 export const Table = ({ filteredProjects }: { filteredProjects: ProjectInfo[] }) => {
    
    return (
      <table>
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Job Number</th>
            <th>Name</th>
            <th>Contractor</th>
          </tr>
        </thead>
        <tbody>
          {filteredProjects.map((project) => (
            <tr key={project.projSerialNumber}>
              <td>{project.projSerialNumber}</td>
              <td>{project.jobNumber}</td>
              <td>{project.name}</td>
              <td>{project.contractor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
