declare module 'next' {
  export type Metadata = any;
  export type Viewport = any;
  export namespace MetadataRoute {
    export type Robots = any;
    export type Sitemap = any;
  }
  export type NextConfig = any;
}
declare module 'next/script' {
  import React from 'react';
  const Script: React.ComponentType<any>;
  export default Script;
}
declare module 'next/types.js' {
  export type ResolvingMetadata = any;
  export type ResolvingViewport = any;
}
declare module 'next/server.js' {
  export type NextRequest = any;
}
declare module 'next/*' {
  const content: any;
  export default content;
}
