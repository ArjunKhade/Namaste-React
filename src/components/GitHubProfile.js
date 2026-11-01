import { useEffect, useState } from "react";
import "./GitHubProfile.css";

const PROFILE_URL = "https://api.github.com/users/ArjunKhade";

const GitHubProfileShimmer = () => (
  <main className="github-profile-page" aria-busy="true">
    <article className="github-profile-card github-profile-shimmer" role="status" aria-label="Loading GitHub profile">
      <div className="github-profile-banner github-profile-skeleton" />
      <div className="github-profile-content">
        <div className="github-profile-avatar github-profile-skeleton" />
        <div className="github-profile-heading">
          <div className="github-profile-skeleton-heading">
            <div className="github-profile-skeleton github-profile-skeleton-eyebrow" />
            <div className="github-profile-skeleton github-profile-skeleton-name" />
            <div className="github-profile-skeleton github-profile-skeleton-username" />
          </div>
          <div className="github-profile-skeleton github-profile-skeleton-button" />
        </div>
        <div className="github-profile-skeleton github-profile-skeleton-bio" />
        <div className="github-profile-skeleton-details">
          <div className="github-profile-skeleton github-profile-skeleton-detail" />
          <div className="github-profile-skeleton github-profile-skeleton-detail" />
          <div className="github-profile-skeleton github-profile-skeleton-detail" />
        </div>
        <div className="github-profile-shimmer-stats">
          <div>
            <div className="github-profile-skeleton github-profile-skeleton-stat" />
            <div className="github-profile-skeleton github-profile-skeleton-stat-label" />
          </div>
          <div>
            <div className="github-profile-skeleton github-profile-skeleton-stat" />
            <div className="github-profile-skeleton github-profile-skeleton-stat-label" />
          </div>
          <div>
            <div className="github-profile-skeleton github-profile-skeleton-stat" />
            <div className="github-profile-skeleton github-profile-skeleton-stat-label" />
          </div>
        </div>
      </div>
    </article>
  </main>
);

const GitHubProfile = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const fetchProfile = async () => {
      try {
        const response = await fetch(PROFILE_URL, { signal: controller.signal });
        if (!response.ok) {
          throw new Error(`GitHub returned an error (${response.status}).`);
        }

        const data = await response.json();
        setProfile(data);
      } catch (requestError) {
        if (requestError.name !== "AbortError") {
          setError(requestError.message || "Unable to load the GitHub profile.");
        }
      }
    };

    fetchProfile();
    return () => controller.abort();
  }, []);

  if (error) {
    return (
      <main className="github-profile-page">
        <p className="github-profile-message" role="alert">{error}</p>
      </main>
    );
  }

  if (!profile) {
    return <GitHubProfileShimmer />;
  }

  const joinedDate = profile.created_at
    ? new Date(profile.created_at).toLocaleDateString(undefined, {
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <main className="github-profile-page">
      <article className="github-profile-card">
        <div className="github-profile-banner" />
        <div className="github-profile-content">
          <img
            className="github-profile-avatar"
            src={profile.avatar_url}
            alt={`${profile.name || profile.login}'s avatar`}
          />

          <div className="github-profile-heading">
            <div>
              <p className="github-profile-eyebrow">GitHub profile</p>
              <h1>{profile.name || profile.login}</h1>
              <a
                className="github-profile-username"
                href={profile.html_url}
                target="_blank"
                rel="noreferrer"
              >
                @{profile.login}
              </a>
            </div>
            <a
              className="github-profile-follow"
              href={profile.html_url}
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>

          {profile.bio && <p className="github-profile-bio">{profile.bio}</p>}

          <div className="github-profile-details">
            {profile.location && (
              <span><span aria-hidden="true">⌖</span> {profile.location}</span>
            )}
            {profile.company && (
              <span><span aria-hidden="true">▦</span> {profile.company}</span>
            )}
            {joinedDate && (
              <span><span aria-hidden="true">◷</span> Joined {joinedDate}</span>
            )}
            {profile.blog && (
              <a href={profile.blog} target="_blank" rel="noreferrer">
                <span aria-hidden="true">↗</span> Portfolio
              </a>
            )}
          </div>

          <div className="github-profile-stats" aria-label="GitHub statistics">
            <div><strong>{profile.public_repos}</strong><span>Repositories</span></div>
            <div><strong>{profile.followers}</strong><span>Followers</span></div>
            <div><strong>{profile.following}</strong><span>Following</span></div>
          </div>
        </div>
      </article>
    </main>
  );
};

export default GitHubProfile;
