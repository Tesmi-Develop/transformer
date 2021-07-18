import { RojoResolver } from "../classes/rojoResolver/rojoResolver";

export interface Cache {
	rojoSum?: string;
	rojoResolver?: RojoResolver;
	buildInfoCandidates?: string[];
	isInitialCompile: boolean;
	shouldView: Map<string, boolean>;
	realPath: Map<string, string>;
}

/**
 * Global cache that is only reset when rbxtsc is restarted.
 */
export const Cache: Cache = {
	isInitialCompile: true,
	shouldView: new Map(),
	realPath: new Map(),
};
