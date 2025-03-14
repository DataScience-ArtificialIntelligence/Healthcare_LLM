const { getDefaultConfig } = require('expo/metro-config')
const { withNativeWind } = require('nativewind/metro')
const {
    wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config')

let config = getDefaultConfig(__dirname)
config.resolver.sourceExts.push('cjs')

// Apply NativeWind first, then wrap with Reanimated
config = withNativeWind(config, { input: './global.css' })
config = wrapWithReanimatedMetroConfig(config)

module.exports = config
