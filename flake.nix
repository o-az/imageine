{
  description = "imagein";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
    {
      self,
      nixpkgs,
      flake-utils,
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in
      {
        devShell =
          with pkgs;
          pkgs.mkShell {
            buildInputs = [
              vips
              biome
              direnv
              nixfmt-rfc-style
              nodePackages_latest.pnpm
              nodePackages_latest.nodejs
            ];
          };
      }
    );
}
