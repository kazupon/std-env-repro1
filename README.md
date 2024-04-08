# std-env-repro1

## step to reproduction

```sh
# install
npm install

# build
npm build
ℹ Building std-env-repro1                                                                                                                                               
ℹ Cleaning dist directory: ./dist                                                                                                                                      
Generated an empty chunk: "ci".
Generated an empty chunk: "windows".
Generated an empty chunk: "ci".
Generated an empty chunk: "windows".
Generated an empty chunk: "ci".
Generated an empty chunk: "windows".
✔ Build succeeded for std-env-repro1                                                                                                                                  
  dist/ci.cjs (total size: 3.2 kB, chunk size: 112 B)                                                                                                                
  └─ dist/shared/std-env-repro1.d6e60ff5.cjs (3.09 kB)

  dist/windows.cjs (total size: 3.2 kB, chunk size: 115 B)                                                                                                          
  └─ dist/shared/std-env-repro1.d6e60ff5.cjs (3.09 kB)

  dist/ci.mjs (total size: 3.15 kB, chunk size: 86 B)                                                                                                              
  └─ dist/shared/std-env-repro1.15cfa7fe.mjs (3.06 kB)

  dist/windows.mjs (total size: 3.15 kB, chunk size: 89 B)                                                                                                        
  └─ dist/shared/std-env-repro1.15cfa7fe.mjs (3.06 kB)

Σ Total dist size (byte size): 6.63 kB

# grep contains provider information
cat dist/shared/*.cjs | grep BAMBOO
cat dist/shared/*.mjs | grep BAMBOO
```

## unbuild config

```ts
import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
    entries: ['src/ci.ts', 'src/windows.ts'],
    declaration: true,
    rollup: {
        
        inlineDependencies: true,
        emitCJS: true,
    }
})
```