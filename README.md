# Get

Quick javascript "fetch 'n' serve" method, inspired by the curious crawler bots I've seen crawling my web domain. Really just a quick way to check the security of whatever is hosted at the address specified in 'get.js'.

```
$ yarn
```
...will install itself into a 'node_modules' dir at the project root.
```
$ yarn get
```
...will send a fetch request to the given web address and write the output to 'index.html', over-writing the previous contents.
```
$ yarn serve
```
...will serve the fetched content, placed in 'index.html', at the usual dev server address (i.e., 'localhost:3000').

## Why?

Yeah it's simple, clearly it took about 30 seconds to write. I've had unusual, unidentified crawlers on my web domain logs from time to time, posting a series of GET requests in certain locations on the server, locations which strike me as a bit suspect as to what they were crawling *for*, exactly...

I just wanted to replicate the behaviour myself as an obviously fairly primitive means of understanding security vulnerabilities based on an observation 'in the wild'.

# Requires

NodeJS. Note that you can obviously use NPM, PNPM, or whatever else. It would probably take less time to write this code yourself than it would to clone it...
