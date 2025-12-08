/**
 * Example usage of the Bitbucket API client
 * 
 * This file demonstrates how to use the Bitbucket client in your application.
 */

import { createBitbucketClient } from './bitbucket';

// Example: Using the client in a server component or API route
export async function exampleUsage() {
  // Create a client instance
  const client = createBitbucketClient('your-workspace-name');

  try {
    // Get current user information
    const user = await client.getCurrentUser();
    console.log('Current user:', user);

    // Get all workspaces
    const workspaces = await client.getWorkspaces();
    console.log('Workspaces:', workspaces);

    // Get repositories in a workspace
    const repos = await client.getRepositories('your-workspace-name');
    console.log('Repositories:', repos);

    // Get a specific repository
    const repo = await client.getRepository('your-workspace-name', 'repo-slug');
    console.log('Repository:', repo);

    // Get commits
    const commits = await client.getCommits('your-workspace-name', 'repo-slug');
    console.log('Commits:', commits);

    // Get branches
    const branches = await client.getBranches('your-workspace-name', 'repo-slug');
    console.log('Branches:', branches);

    // Get pull requests
    const pullRequests = await client.getPullRequests(
      'your-workspace-name',
      'repo-slug'
    );
    console.log('Pull Requests:', pullRequests);

    // Create a pull request
    const newPR = await client.createPullRequest('your-workspace-name', 'repo-slug', {
      title: 'My Pull Request',
      source: { branch: { name: 'feature-branch' } },
      destination: { branch: { name: 'main' } },
      description: 'This is a description of my PR',
    });
    console.log('Created PR:', newPR);
  } catch (error) {
    console.error('Error:', error);
  }
}


