import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
    entries: ['src/ci.ts', 'src/windows.ts'],
    declaration: true,
    rollup: {
        
        inlineDependencies: true,
        emitCJS: true,
        // resolve: {
        //     exportConditions: ['node'],
        // }
    }
})