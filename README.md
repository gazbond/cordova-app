##### ios

in platforms/ios find:
`WKWebViewConfiguration* configuration = [[WKWebViewConfiguration alloc] init];`

add the following below:
`[configuration.preferences setValue:@TRUE forKey:@"allowFileAccessFromFileURLs"];`
`[configuration setValue:@"TRUE" forKey:@"allowUniversalAccessFromFileURLs"];`