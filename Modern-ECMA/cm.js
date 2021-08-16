task.plugin('buble', {}, function * (file, opts) {
    opts = Object.assign({
        inline: false,
        sourceMap: true,
        file: file.base,
        source: relPath(file)
    }, opts);

    console.log('fwfw')

    // Transform data
    const output = transform(file.data.toString(), opts);

    // Handle sourcemaps
    if (opts.sourceMap) {
        if (opts.inline) {
            // Append inline sourcemap
            output.code += `\n//# sourceMappingURL=${output.map.toUrl()}`;
        } else {
            output.code += `\n//# sourceMappingURL=${opts.file}.map`;
            // Create new file
            this._.files.push({
                base: `${opts.file}.map`,
                data: output.map.toString(),
                dir: file.dir
            });
        }
    }

    // doc: Return contents as Buffer!
    file.data = new Buffer(output.code);
});