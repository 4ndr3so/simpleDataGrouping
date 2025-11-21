
import { ProjectInfo, GroupedProjects } from '../types/types';

export const groupProjectsByStatus = (projects: ProjectInfo[], guaranteedStatuses: string[]): GroupedProjects => {
  
    //I need to know the status somewhere in advance
  //const KNOWN_STATUSES: ProjectInfo['status'][] = ['A', 'B', 'C', 'D'];
  const KNOWN_STATUSES: string[] = guaranteedStatuses;
  
  const initialGroups: GroupedProjects = KNOWN_STATUSES.reduce((acc, status) => {
    acc[status] = [];
    return acc;
  }, {} as GroupedProjects);


  return projects.reduce((acc, project) => {
    const statusKey = project.status;
    
   
    if (KNOWN_STATUSES.includes(statusKey)) {
        acc[statusKey].push(project);
    }
    
    return acc;
  }, initialGroups); 
};