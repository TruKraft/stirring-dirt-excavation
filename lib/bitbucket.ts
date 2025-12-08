/**
 * Bitbucket API Client
 * 
 * This module provides a client for interacting with the Bitbucket API.
 * Uses the Bitbucket Cloud REST API v2.
 */

const BITBUCKET_API_BASE = 'https://api.bitbucket.org/2.0';

interface BitbucketClientConfig {
  token: string;
  workspace?: string;
}

class BitbucketClient {
  private token: string;
  private workspace?: string;
  private baseUrl: string;

  constructor(config: BitbucketClientConfig) {
    this.token = config.token;
    this.workspace = config.workspace;
    this.baseUrl = BITBUCKET_API_BASE;
  }

  /**
   * Makes an authenticated request to the Bitbucket API
   */
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    
    const response = await fetch(url, {
      ...options,
      headers: {
        'Authorization': `Bearer ${this.token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(
        `Bitbucket API error: ${response.status} ${response.statusText} - ${error}`
      );
    }

    return response.json();
  }

  /**
   * Get current user information
   */
  async getCurrentUser() {
    return this.request('/user');
  }

  /**
   * Get user's workspaces
   */
  async getWorkspaces() {
    return this.request('/workspaces');
  }

  /**
   * Get repositories in a workspace
   */
  async getRepositories(workspace: string, page = 1, pageSize = 10) {
    return this.request(
      `/repositories/${workspace}?page=${page}&pagelen=${pageSize}`
    );
  }

  /**
   * Get a specific repository
   */
  async getRepository(workspace: string, repoSlug: string) {
    return this.request(`/repositories/${workspace}/${repoSlug}`);
  }

  /**
   * Get repository commits
   */
  async getCommits(
    workspace: string,
    repoSlug: string,
    page = 1,
    pageSize = 10
  ) {
    return this.request(
      `/repositories/${workspace}/${repoSlug}/commits?page=${page}&pagelen=${pageSize}`
    );
  }

  /**
   * Get repository branches
   */
  async getBranches(workspace: string, repoSlug: string) {
    return this.request(`/repositories/${workspace}/${repoSlug}/refs/branches`);
  }

  /**
   * Get repository pull requests
   */
  async getPullRequests(
    workspace: string,
    repoSlug: string,
    page = 1,
    pageSize = 10
  ) {
    return this.request(
      `/repositories/${workspace}/${repoSlug}/pullrequests?page=${page}&pagelen=${pageSize}`
    );
  }

  /**
   * Create a pull request
   */
  async createPullRequest(
    workspace: string,
    repoSlug: string,
    data: {
      title: string;
      source: { branch: { name: string } };
      destination: { branch: { name: string } };
      description?: string;
    }
  ) {
    return this.request(
      `/repositories/${workspace}/${repoSlug}/pullrequests`,
      {
        method: 'POST',
        body: JSON.stringify(data),
      }
    );
  }
}

/**
 * Create a Bitbucket client instance using environment variables
 */
export function createBitbucketClient(workspace?: string): BitbucketClient {
  const token = process.env.BITBUCKET_API_TOKEN;

  if (!token) {
    throw new Error(
      'BITBUCKET_API_TOKEN environment variable is not set. Please add it to your .env.local file.'
    );
  }

  return new BitbucketClient({
    token,
    workspace,
  });
}

export default BitbucketClient;


