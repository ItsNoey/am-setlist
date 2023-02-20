/** @format */

import React from "react";

const links = [
  {
    url: "https://open.spotify.com/track/5eyTC5GZzpzlN7YRO9AoPf?si=0b9d71c7cf694eb7",
    title: "The View From the Afternoon",
  },
  {
    url: "https://open.spotify.com/track/7f9I5WdyXm5q1XqnSYgQZb?si=cd34673d87ad401a",
    title: "Brainstorm",
  },
  {
    url: "https://open.spotify.com/track/0NdTUS4UiNYCNn5FgVqKQY?si=33c53a4646924f16",
    title: "Snap Out of It",
  },
  {
    url: "https://open.spotify.com/track/6wVWJl64yoTzU27EI8ep20?si=5887c210577d4a78",
    title: "Crying Lightning",
  },
  {
    url: "https://open.spotify.com/track/3czdA0j4iaLDJJCoT5D8iP?si=83157407a6ec4a4f",
    title: "Don't Sit Down 'Cause I've Moved Your Chair",
  },
  {
    url: "https://open.spotify.com/track/5hljqZrl0h7RcIhUnOPuve?si=b5607bbde4694018",
    title: "Sculptures of Anything Goes",
  },
  {
    url: "https://open.spotify.com/track/086myS9r57YsLbJpU0TgK9?si=e7e2f67877414183",
    title: "Why'd You Only Call Me When You're High",
  },
  {
    url: "https://open.spotify.com/track/5Z5nbOXhsSbySVC7WUc6y9?si=14870289d9314be1",
    title: "Four Out of Five",
  },
  {
    url: "https://open.spotify.com/track/7nzsY8vlnKdvGOEE0rjAXZ?si=0cbfd3cec40740ba",
    title: "Arabella",
  },
  {
    url: "https://open.spotify.com/track/45n7uujqwmMyBMjBu9SwRu?si=d51f583ef5e94f2c",
    title: "Pretty Visitors",
  },
  {
    url: "https://open.spotify.com/track/5bsnLiT00hG37qd8p2jdVl?si=5327b9f52c0c417d",
    title: "Cornerstone",
  },
  {
    url: "https://open.spotify.com/track/5FVd6KXrgO9B3JPmC8OPst?si=c805a0f865f34634",
    title: "Do I Wanna Know?",
  },
  {
    url: "https://open.spotify.com/track/1zx6GSqLYI2ynzAHnPRKBR?si=4d7ac1ca0a7e494a",
    title: "There'd Better Be a Mirrorball",
  },
  {
    url: "https://open.spotify.com/track/2URDbWGmPz3vhagl25p8OC?si=2c88c7bded544e76",
    title: "Tranquility Base Hotel & Casino",
  },
  {
    url: "https://open.spotify.com/track/5kxVyCgEUND7E2QKG7JmoF?si=07d0632554354566",
    title: "Teddy Picker",
  },
  {
    url: "https://open.spotify.com/track/2vQQfWTanvD99OeHLAoyhW?si=ff1ab82466904da3",
    title: "From the Ritz to The Rubble",
  },
  {
    url: "https://open.spotify.com/track/3DQVgcqaP3iSMbaKsd57l5?si=264fefbac16d4ca5",
    title: "I Bet You Look Good on the Dancefloor",
  },
  {
    url: "https://open.spotify.com/track/7A7FsIDnBMnz1PAnSOxUdh?si=07f80a2210d04aeb",
    title: "Body Paint",
  },
  {
    url: "https://open.spotify.com/track/4KPi4VNvPOfKqIp1sx19Xf?si=3823f9ce6a2249dd",
    title: "Big Ideas",
  },
  {
    url: "https://open.spotify.com/track/0BxE4FqsDD1Ot4YuBXwAPp?si=c713d06c5a1249cb",
    title: "505",
  },
  {
    url: "https://open.spotify.com/track/2AT8iROs4FQueDv2c8q2KE?si=765f9dfd89a14be2",
    title: "R U Mine?",
  },
];

export default function MainContent() {
  return (
    <div className="main--container">
      <div className="main--content">
        <h1 className="main--title">Setlist</h1>

        <ol className="main--list-items">
          {links.map((link) => (
            <a href={link.url} target={"_blank"}>
              <li>{link.title}</li>
            </a>
          ))}
        </ol>
      </div>
    </div>
  );
}
