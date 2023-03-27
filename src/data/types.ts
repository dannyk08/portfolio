export interface ProjectAssetDetail {
  url: string,
  alt: string,
  height: number,
  width: number,
}

export interface VideoProjectAssetDetail extends ProjectAssetDetail {
  videoUrls: string[],
}

export type ProjectDetail = ProjectAssetDetail & VideoProjectAssetDetail

export interface ProjectDetails<T = ProjectDetail> {
  url: string,
  heading: string,
  description: string,
  assets: T[],
  githubUrl?: string,
}

export interface Project {
  projectType: string,
  description: string[],
  samples: ProjectDetails[]
}
