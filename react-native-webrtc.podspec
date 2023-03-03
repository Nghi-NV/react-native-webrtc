require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|
  s.name                = package['name']
  s.version             = package['version']
  s.summary             = package['description']
  s.homepage            = 'https://github.com/Nghi-NV/react-native-webrtc'
  s.license             = package['license']
  s.author              = 'Lumi-OWS'
  s.source              = { :git => 'git@github.com:Nghi-NV/react-native-webrtc.git' }
  s.requires_arc        = true

  s.platforms           = { :ios => '12.0', :osx => '10.13' }

  s.preserve_paths      = 'ios/**/*'
  s.source_files        = 'ios/**/*.{h,m}'
  s.libraries           = 'c', 'sqlite3', 'stdc++'
  s.framework           = 'AudioToolbox','AVFoundation', 'CoreAudio', 'CoreGraphics', 'CoreVideo', 'GLKit', 'VideoToolbox'
  s.dependency          'React-Core'
  s.ios.vendored_frameworks = 'ios/WebRTC.framework'
  s.xcconfig            = { 'OTHER_LDFLAGS' => '-framework WebRTC' }
end
