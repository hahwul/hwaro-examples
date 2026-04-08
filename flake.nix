{
  description = "hwaro-examples dev environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs {
          inherit system;
          config.permittedInsecurePackages = [
            "openssl-1.1.1w"
          ];
        };

        hwaro-version = "0.11.0";

        hwaro-src = {
          x86_64-linux = pkgs.fetchurl {
            url = "https://github.com/hahwul/hwaro/releases/download/v${hwaro-version}/hwaro-v${hwaro-version}-linux-x86_64";
            sha256 = "13p4rm4sn9xilfrf39x06k50agqxzban01kbcvhqkm4qb2jnvl25";
          };
          aarch64-linux = pkgs.fetchurl {
            url = "https://github.com/hahwul/hwaro/releases/download/v${hwaro-version}/hwaro-v${hwaro-version}-linux-arm64";
            sha256 = "0b7mpylfq1kb1mc09lrsn8k9ry3vgywkq7bchimhrn18hk0sw92q";
          };
          aarch64-darwin = pkgs.fetchurl {
            url = "https://github.com/hahwul/hwaro/releases/download/v${hwaro-version}/hwaro-v${hwaro-version}-osx-arm64";
            sha256 = "0ncd9nr5yrqfpick7nkkgq21gnk5a8rp121xh10p88akgpyp5mbs";
          };
        }.${system} or (throw "Unsupported system: ${system}");

        isDarwin = pkgs.lib.hasSuffix "darwin" system;
        isLinux = pkgs.lib.hasSuffix "linux" system;

        hwaro = pkgs.stdenvNoCC.mkDerivation {
          pname = "hwaro";
          version = hwaro-version;
          src = hwaro-src;
          dontUnpack = true;

          nativeBuildInputs = [
            pkgs.makeWrapper
          ] ++ pkgs.lib.optionals isLinux [
            pkgs.autoPatchelfHook
          ];

          buildInputs = pkgs.lib.optionals isLinux [
            pkgs.openssl_1_1
            pkgs.libxml2
            pkgs.zlib
          ];

          installPhase = ''
            mkdir -p $out/bin
            cp $src $out/bin/.hwaro-unwrapped
            chmod +x $out/bin/.hwaro-unwrapped
          '' + (if isDarwin then ''
            makeWrapper $out/bin/.hwaro-unwrapped $out/bin/hwaro \
              --set DYLD_LIBRARY_PATH "${pkgs.lib.makeLibraryPath [ pkgs.openssl_1_1 ]}"
          '' else ''
            ln -s $out/bin/.hwaro-unwrapped $out/bin/hwaro
          '');
        };
      in
      {
        packages.hwaro = hwaro;
        packages.default = hwaro;

        devShells.default = pkgs.mkShell {
          buildInputs = [ hwaro ];
        };
      }
    );
}
