export interface ProjectInfo {
    projSerialNumber: string;
    jobNumber: string;
    name: string;
    contractor: string;
    status: 'A' | 'B' | 'C' | 'D';
}

export interface GroupedProjects {
  [status: string]: ProjectInfo[];
}