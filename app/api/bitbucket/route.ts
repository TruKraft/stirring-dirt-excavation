import { createBitbucketClient } from '@/lib/bitbucket';
import { NextRequest, NextResponse } from 'next/server';

/**
 * Example Bitbucket API route
 * GET /api/bitbucket?action=user|workspaces|repos&workspace=xxx&repo=xxx
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const action = searchParams.get('action') || 'user';
    const workspace = searchParams.get('workspace');
    const repo = searchParams.get('repo');

    const client = createBitbucketClient(workspace || undefined);

    switch (action) {
      case 'user': {
        const user = await client.getCurrentUser();
        return NextResponse.json({ success: true, data: user });
      }

      case 'workspaces': {
        const workspaces = await client.getWorkspaces();
        return NextResponse.json({ success: true, data: workspaces });
      }

      case 'repos': {
        if (!workspace) {
          return NextResponse.json(
            { success: false, error: 'Workspace parameter is required' },
            { status: 400 }
          );
        }
        const repos = await client.getRepositories(workspace);
        return NextResponse.json({ success: true, data: repos });
      }

      case 'repo': {
        if (!workspace || !repo) {
          return NextResponse.json(
            { success: false, error: 'Workspace and repo parameters are required' },
            { status: 400 }
          );
        }
        const repository = await client.getRepository(workspace, repo);
        return NextResponse.json({ success: true, data: repository });
      }

      case 'commits': {
        if (!workspace || !repo) {
          return NextResponse.json(
            { success: false, error: 'Workspace and repo parameters are required' },
            { status: 400 }
          );
        }
        const commits = await client.getCommits(workspace, repo);
        return NextResponse.json({ success: true, data: commits });
      }

      case 'branches': {
        if (!workspace || !repo) {
          return NextResponse.json(
            { success: false, error: 'Workspace and repo parameters are required' },
            { status: 400 }
          );
        }
        const branches = await client.getBranches(workspace, repo);
        return NextResponse.json({ success: true, data: branches });
      }

      case 'pullrequests': {
        if (!workspace || !repo) {
          return NextResponse.json(
            { success: false, error: 'Workspace and repo parameters are required' },
            { status: 400 }
          );
        }
        const pullRequests = await client.getPullRequests(workspace, repo);
        return NextResponse.json({ success: true, data: pullRequests });
      }

      default:
        return NextResponse.json(
          { success: false, error: `Unknown action: ${action}` },
          { status: 400 }
        );
    }
  } catch (error) {
    console.error('Bitbucket API error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

